import React, { useState, useEffect } from 'react';
import { LessonPlan, Activity } from '../types';
import { Button } from './Button';
import { getRandomActivity } from '../data';
import { Clock, RefreshCw, CheckCircle, RotateCcw, Box, Info, Lightbulb } from 'lucide-react';

interface ActiveLessonProps {
  lesson: LessonPlan;
  onFinish: () => void;
  onUpdateLesson: (newLesson: LessonPlan) => void;
}

const StageIndicator = ({ stage, activeStage, label }: { stage: string, activeStage: string, label: string }) => (
  <div className={`flex flex-col items-center flex-1 ${activeStage === stage ? 'opacity-100' : 'opacity-40'}`}>
    <div className={`w-3 h-3 rounded-full mb-1 ${activeStage === stage ? 'bg-primary shadow-[0_0_10px_#06b6d4]' : 'bg-slate-600'}`} />
    <span className="text-[10px] uppercase font-bold tracking-wider">{label}</span>
  </div>
);

export const ActiveLesson: React.FC<ActiveLessonProps> = ({ lesson, onFinish, onUpdateLesson }) => {
  const [activeStage, setActiveStage] = useState<'warmup' | 'main' | 'fun'>('warmup');
  const [timeLeft, setTimeLeft] = useState<number>(lesson.activities.warmup.durationMin * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(lesson.activities[activeStage].durationMin * 60);
    setIsRunning(false);
  }, [activeStage, lesson.activities]);

  useEffect(() => {
    let interval: number;
    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSwap = () => {
    const currentActivity = lesson.activities[activeStage];
    const newActivity = getRandomActivity(
      activeStage, 
      lesson.ageGroup, 
      lesson.level, 
      [currentActivity.id]
    );

    if (newActivity) {
      onUpdateLesson({
        ...lesson,
        activities: { ...lesson.activities, [activeStage]: newActivity }
      });
    } else {
      alert('Nenhuma atividade alternativa encontrada.');
    }
  };

  const handleNext = () => {
    if (activeStage === 'warmup') setActiveStage('main');
    else if (activeStage === 'main') setActiveStage('fun');
    else onFinish();
  };

  const currentActivity = lesson.activities[activeStage];

  return (
    <div className="flex flex-col h-screen bg-dark">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-dark/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex gap-4 w-full">
          <StageIndicator stage="warmup" activeStage={activeStage} label="Aquece" />
          <StageIndicator stage="main" activeStage={activeStage} label="Principal" />
          <StageIndicator stage="fun" activeStage={activeStage} label="Final" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-32">
        <div className="bg-card rounded-2xl p-6 flex flex-col items-center border border-slate-700 shadow-xl">
          <div className={`text-6xl font-black font-mono mb-4 tabular-nums ${timeLeft < 60 && timeLeft > 0 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
            {formatTime(timeLeft)}
          </div>
          <div className="flex gap-4 w-full">
            <Button variant={isRunning ? "outline" : "primary"} fullWidth onClick={() => setIsRunning(!isRunning)}>
              {isRunning ? "Pausar" : "Iniciar Timer"}
            </Button>
            <Button variant="ghost" className="px-4" onClick={() => { setIsRunning(false); setTimeLeft(currentActivity.durationMin * 60); }}>
              <RotateCcw className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-2xl font-bold text-primary leading-tight">{currentActivity.title}</h2>
            <button onClick={handleSwap} className="p-2 bg-slate-800 rounded-lg text-secondary border border-slate-700 active:scale-90 transition-all">
              <RefreshCw className="w-6 h-6" />
            </button>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 mb-2 text-slate-300">
              <Info className="w-5 h-5" />
              <span className="font-bold text-sm uppercase">Como Fazer</span>
            </div>
            <p className="text-lg leading-relaxed text-slate-100">{currentActivity.description}</p>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 mb-2 text-slate-300">
              <Box className="w-5 h-5" />
              <span className="font-bold text-sm uppercase">Materiais</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentActivity.materials?.length > 0 ? (
                currentActivity.materials.map((m, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-semibold">{m}</span>
                ))
              ) : (
                <span className="text-slate-500 italic">Nenhum material necessário</span>
              )}
            </div>
          </div>

          {currentActivity.tip && (
            <div className="bg-yellow-900/20 p-4 rounded-xl border border-yellow-700/50">
              <div className="flex items-center gap-2 mb-2 text-yellow-400">
                <Lightbulb className="w-5 h-5" />
                <span className="font-bold text-sm uppercase">Dica do Sistema</span>
              </div>
              <p className="text-yellow-100 italic">"{currentActivity.tip}"</p>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-slate-800 bg-dark/95 backdrop-blur-sm fixed bottom-0 w-full z-10">
        <Button fullWidth variant="secondary" onClick={handleNext}>
          {activeStage === 'fun' ? (
            <span className="flex items-center gap-2">Finalizar Aula <CheckCircle /></span>
          ) : (
            <span className="flex items-center gap-2">Próxima Etapa <Clock /></span>
          )}
        </Button>
      </div>
    </div>
  );
};