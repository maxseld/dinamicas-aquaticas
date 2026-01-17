import React from 'react';
import { Button } from './Button';
import { User } from '../types';
import { Plus, History, LogOut } from 'lucide-react';

interface DashboardProps {
  user: User;
  onStartPlan: () => void;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, onStartPlan, onLogout }) => {
  return (
    <div className="min-h-screen bg-dark p-6 flex flex-col">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-white">Olá, {user.name}</h1>
          <p className="text-slate-400">Pronto para a piscina?</p>
        </div>
        <button onClick={onLogout} className="text-slate-500 hover:text-white">
          <LogOut className="w-6 h-6" />
        </button>
      </header>

      <div className="space-y-8 flex-1">
        <section>
          <div className="bg-gradient-to-br from-cyan-900 to-slate-900 p-6 rounded-2xl border border-cyan-800 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Próxima Aula</h2>
            <p className="text-cyan-200 mb-6 text-sm">Crie um plano à prova de erros em menos de 1 minuto.</p>
            <Button fullWidth variant="primary" onClick={onStartPlan}>
              <Plus className="w-6 h-6" /> Planejar Aula Agora
            </Button>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4 text-slate-300">
            <History className="w-5 h-5" />
            <h3 className="font-bold uppercase tracking-wider text-sm">Histórico Recente</h3>
          </div>
          
          <div className="space-y-3">
            {/* Mock History Items */}
            {[
              { day: 'Hoje', time: '09:00', level: 'Infantil I' },
              { day: 'Ontem', time: '14:30', level: 'Bebês' },
              { day: '12/10', time: '10:00', level: 'Aperfeiçoamento' },
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">{item.level}</div>
                  <div className="text-sm text-slate-500">{item.day} • {item.time}</div>
                </div>
                <div className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-900">
                  Concluído
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};