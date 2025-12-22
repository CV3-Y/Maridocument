"use client";

interface ProgressBarProps {
  label: string;
  value: number;
  type?: 'normal' | 'inverse';
  isDead?: boolean;
}

export default function ProgressBar({ label, value, type = 'normal', isDead = false }: ProgressBarProps) {
  let colorClass = "bg-green-500"; 
  
  if (isDead) {
    colorClass = "bg-gray-600";
  } else if (type === 'normal') {
    if (value < 30) colorClass = "bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.7)]"; 
    else if (value < 70) colorClass = "bg-yellow-500"; 
  } else {
    if (value > 70) colorClass = "bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.7)]"; 
    else if (value > 30) colorClass = "bg-yellow-500"; 
  }

  return (
    <div className="mb-3">
      <div className="flex justify-between text-[10px] mb-1 font-bold opacity-80">
        <span className={isDead ? "text-gray-500 decoration-line-through" : ""}>{label}</span>
        <span className={isDead ? "text-red-600" : ""}>{isDead ? "SIGNAL LOST" : `${value}%`}</span>
      </div>
      <div className="w-full h-2 bg-green-900/10 border border-green-800/30 overflow-hidden relative">
        {isDead && <div className="absolute inset-0 border-b border-red-900/50 top-1/2"></div>}
        <div 
          className={`h-full ${colorClass} ${!isDead && 'animate-grow'}`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}