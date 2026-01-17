import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowLeft, ArrowRight, Users, Baby, GraduationCap, Target } from 'lucide-react';
import { AgeGroup, LessonLevel, FilterCriteria } from '../types';

interface LessonWizardProps {
  onComplete: (criteria: FilterCriteria) => void;
  onCancel: () => void;
}

export const LessonWizard: React.FC<LessonWizardProps> = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FilterCriteria>({
    studentCount: 5,
    ageGroup: '3-5',
    level: 'initiation'
  });

  const nextStep = () => setStep(p => p + 1);
  const prevStep = () => setStep(p => p - 1);

  // Step 1: Count
  const StepOne = () => (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <div className="text-center space-y-4">
        <Users className="w-16 h-16 text-primary mx-auto" />
        <h2 className="text-2xl font-bold">Quantos alunos hoje?</h2>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button 
          onClick={() => setData(p => ({...p, studentCount: Math.max(1, p.studentCount - 1)}))}
          className="w-16 h-16 rounded-full bg-slate-700 text-3xl font-bold text-white active:bg-slate-600"
        >
          -
        </button>
        <div className="text-6xl font-black text-primary w-24 text-center">
          {data.studentCount}
        </div>
        <button 
          onClick={() => setData(p => ({...p, studentCount: p.studentCount + 1}))}
          className="w-16 h-16 rounded-full bg-slate-700 text-3xl font-bold text-white active:bg-slate-600"
        >
          +
        </button>
      </div>
      <Button fullWidth onClick={nextStep} className="mt-8">
        Próximo <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );

  // Step 2: Age
  const StepTwo = () => (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <div className="text-center space-y-4">
        <Baby className="w-16 h-16 text-secondary mx-auto" />
        <h2 className="text-2xl font-bold">Faixa Etária</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[
          { id: 'baby', label: 'Bebês', sub: '6 meses - 2 anos' },
          { id: '3-5', label: 'Infantil I', sub: '3 a 5 anos' },
          { id: '6-10', label: 'Infantil II', sub: '6 a 10 anos' }
        ].map((opt) => (
          <button
            key={opt.id}
            onClick={() => setData(p => ({ ...p, ageGroup: opt.id as AgeGroup }))}
            className={`p-6 rounded-2xl border-2 text-left transition-all ${
              data.ageGroup === opt.id 
                ? 'border-secondary bg-secondary/10' 
                : 'border-slate-700 bg-card'
            }`}
          >
            <div className={`text-xl font-bold ${data.ageGroup === opt.id ? 'text-secondary' : 'text-white'}`}>
              {opt.label}
            </div>
            <div className="text-slate-400 text-sm">{opt.sub}</div>
          </button>
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant="ghost" onClick={prevStep}><ArrowLeft /></Button>
        <Button fullWidth onClick={nextStep}>Próximo <ArrowRight /></Button>
      </div>
    </div>
  );

  // Step 3: Level
  const StepThree = () => (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      <div className="text-center space-y-4">
        <Target className="w-16 h-16 text-emerald-400 mx-auto" />
        <h2 className="text-2xl font-bold">Nível / Objetivo</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[
          { id: 'adaptation', label: 'Adaptação', sub: 'Perder o medo, rosto na água' },
          { id: 'initiation', label: 'Iniciação', sub: 'Primeiros deslocamentos' },
          { id: 'improvement', label: 'Aperfeiçoamento', sub: 'Técnica e resistência' }
        ].map((opt) => (
          <button
            key={opt.id}
            onClick={() => setData(p => ({ ...p, level: opt.id as LessonLevel }))}
            className={`p-6 rounded-2xl border-2 text-left transition-all ${
              data.level === opt.id 
                ? 'border-emerald-500 bg-emerald-900/20' 
                : 'border-slate-700 bg-card'
            }`}
          >
            <div className={`text-xl font-bold ${data.level === opt.id ? 'text-emerald-400' : 'text-white'}`}>
              {opt.label}
            </div>
            <div className="text-slate-400 text-sm">{opt.sub}</div>
          </button>
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant="ghost" onClick={prevStep}><ArrowLeft /></Button>
        <Button fullWidth onClick={() => onComplete(data)}>Gerar Aula</Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-6 bg-dark flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2">
          {[1,2,3].map(i => (
            <div key={i} className={`h-2 rounded-full transition-all duration-500 ${step >= i ? 'w-8 bg-primary' : 'w-2 bg-slate-700'}`} />
          ))}
        </div>
        <button onClick={onCancel} className="text-slate-400 font-bold">Cancelar</button>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
      </div>
    </div>
  );
};