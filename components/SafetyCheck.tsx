import React, { useState } from 'react';
import { Button } from './Button';
import { ShieldCheck, CheckSquare, Square } from 'lucide-react';

interface SafetyCheckProps {
  onComplete: () => void;
  onCancel: () => void;
}

export const SafetyCheck: React.FC<SafetyCheckProps> = ({ onComplete, onCancel }) => {
  const [checks, setChecks] = useState({
    drains: false,
    floor: false,
    equipment: false,
    students: false
  });

  const allChecked = Object.values(checks).every(Boolean);

  const toggleCheck = (key: keyof typeof checks) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const Item = ({ label, id }: { label: string, id: keyof typeof checks }) => (
    <div 
      onClick={() => toggleCheck(id)}
      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
        checks[id] 
          ? 'bg-emerald-900/30 border-emerald-500 text-emerald-100' 
          : 'bg-card border-slate-700 text-slate-400'
      }`}
    >
      {checks[id] ? <CheckSquare className="w-8 h-8 text-emerald-400" /> : <Square className="w-8 h-8" />}
      <span className="text-lg font-medium">{label}</span>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <ShieldCheck className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Segurança em 1º Lugar</h2>
          <p className="text-slate-400">Verifique o ambiente antes de começar.</p>
        </div>

        <div className="space-y-3">
          <Item id="drains" label="Ralos verificados?" />
          <Item id="floor" label="Piso livre e não escorregadio?" />
          <Item id="equipment" label="Material de salvatagem à mão?" />
          <Item id="students" label="Alunos sem acessórios perigosos?" />
        </div>

        <div className="pt-4 space-y-3">
          <Button 
            fullWidth 
            disabled={!allChecked} 
            onClick={onComplete}
            variant={allChecked ? "primary" : "outline"}
          >
            {allChecked ? "Tudo Pronto, Iniciar Aula" : "Complete a lista"}
          </Button>
          <Button fullWidth variant="ghost" onClick={onCancel}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};