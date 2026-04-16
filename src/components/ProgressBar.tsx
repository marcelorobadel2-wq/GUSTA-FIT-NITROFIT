import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ProgressBar: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-200">
      <div 
        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};