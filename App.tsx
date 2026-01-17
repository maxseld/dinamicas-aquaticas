import React, { useState } from 'react';
import { User, LessonPlan, FilterCriteria } from './types';
import { getRandomActivity } from './data';
import { Button } from './components/Button';
import { Dashboard } from './components/Dashboard';
import { LessonWizard } from './components/LessonWizard';
import { ActiveLesson } from './components/ActiveLesson';
import { SafetyCheck } from './components/SafetyCheck';
import { Feedback } from './components/Feedback';
import { Waves } from 'lucide-react';

type ViewState = 'login' | 'dashboard' | 'wizard' | 'safety' | 'lesson' | 'feedback';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('login');
  const [user, setUser] = useState<User | null>(null);
  const [currentLesson, setCurrentLesson] = useState<LessonPlan | null>(null);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string) || 'Instrutor';
    const email = (formData.get('email') as string) || 'instrutor@swimflow.com';
    
    setUser({ name, email });
    setView('dashboard');
  };

  const handleWizardComplete = (criteria: FilterCriteria) => {
    const warmup = getRandomActivity('warmup', criteria.ageGroup, criteria.level);
    const main = getRandomActivity('main', criteria.ageGroup, criteria.level);
    const fun = getRandomActivity('fun', criteria.ageGroup, criteria.level);

    if (!warmup || !main || !fun) {
      alert("Ops! Não encontramos atividades suficientes para este filtro exato. Tente ampliar o filtro.");
      return;
    }

    const newLesson: LessonPlan = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ageGroup: criteria.ageGroup,
      level: criteria.level,
      studentCount: criteria.studentCount,
      activities: { warmup, main, fun },
      completed: false
    };

    setCurrentLesson(newLesson);
    setView('safety');
  };

  const renderView = () => {
    switch (view) {
      case 'login':
        return (
          <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
            <div className="w-full max-w-sm space-y-8">
              <div className="text-center">
                <div className="bg-primary/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Waves className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-4xl font-black text-white tracking-tight">SwimFlow</h1>
                <p className="text-slate-400 mt-2">O aliado do instrutor de natação.</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-4 bg-card p-6 rounded-2xl border border-slate-700 shadow-xl">
                <div>
                  <label className="block text-slate-400 text-sm font-bold mb-2">Nome</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Seu nome"
                    required
                    className="w-full bg-slate-900 border border-slate-600 rounded-xl p-4 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-bold mb-2">E-mail de compra</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="exemplo@email.com"
                    required
                    className="w-full bg-slate-900 border border-slate-600 rounded-xl p-4 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <Button fullWidth type="submit" className="mt-4">Entrar</Button>
              </form>
            </div>
          </div>
        );
      case 'dashboard':
        return user ? (
          <Dashboard 
            user={user} 
            onStartPlan={() => setView('wizard')} 
            onLogout={() => setView('login')} 
          />
        ) : null;
      case 'wizard':
        return (
          <LessonWizard 
            onComplete={handleWizardComplete} 
            onCancel={() => setView('dashboard')} 
          />
        );
      case 'safety':
        return (
          <SafetyCheck 
            onComplete={() => setView('lesson')} 
            onCancel={() => setView('dashboard')} 
          />
        );
      case 'lesson':
        return currentLesson ? (
          <ActiveLesson 
            lesson={currentLesson} 
            onFinish={() => setView('feedback')}
            onUpdateLesson={setCurrentLesson}
          />
        ) : null;
      case 'feedback':
        return <Feedback onSubmit={() => {
          setCurrentLesson(null);
          setView('dashboard');
        }} />;
      default:
        return null;
    }
  };

  return <div className="min-h-screen bg-dark">{renderView()}</div>;
};

export default App;