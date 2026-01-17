import React from 'react';
import { Button } from './Button';
import { Smile, Meh, Frown } from 'lucide-react';

interface FeedbackProps {
  onSubmit: () => void;
}

export const Feedback: React.FC<FeedbackProps> = ({ onSubmit }) => {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-6 animate-in zoom-in duration-300">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-black text-white">Aula Finalizada!</h1>
        <p className="text-slate-400 text-lg">Como foi o desempenho geral da turma?</p>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full mb-12">
        {[
          { icon: Smile, color: 'text-emerald-400', label: 'Excelente' },
          { icon: Meh, color: 'text-yellow-400', label: 'Normal' },
          { icon: Frown, color: 'text-red-400', label: 'Difícil' },
        ].map((item, idx) => (
          <button 
            key={idx}
            onClick={onSubmit}
            className="flex flex-col items-center gap-3 p-4 bg-card rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all active:scale-95"
          >
            <item.icon className={`w-16 h-16 ${item.color}`} />
            <span className="text-slate-300 font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <Button variant="ghost" onClick={onSubmit}>
        Pular Feedback
      </Button>
    </div>
  );
};