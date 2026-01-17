import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 touch-manipulation disabled:opacity-50 disabled:pointer-events-none";
  const sizeStyles = "h-14 px-6 text-lg"; // Large touch target
  
  const variants = {
    primary: "bg-primary text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]",
    secondary: "bg-secondary text-black hover:bg-yellow-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent text-slate-300 hover:bg-white/10",
    outline: "border-2 border-slate-600 text-slate-200 hover:border-primary hover:text-primary"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};