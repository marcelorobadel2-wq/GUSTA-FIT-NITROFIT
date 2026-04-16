import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

interface UrgencyBannerProps {
  onCTAClick: () => void;
}

export const UrgencyBanner: React.FC<UrgencyBannerProps> = ({ onCTAClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { hours, minutes, seconds } = useCountdown(15); // 15 minutes countdown

  const handleClick = () => {
    setIsVisible(false);
    onCTAClick();
    
    // Reappear after 1 minute (60000ms)
    setTimeout(() => {
      setIsVisible(true);
    }, 60000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full bg-accent text-white py-3 px-4 z-40 shadow-lg border-t border-white/20"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="animate-pulse bg-white text-accent px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                Últimas Vagas
              </span>
              <p className="text-xs sm:text-sm font-medium">
                Desconto de <span className="font-bold">70%</span> encerra em:
              </p>
            </div>
            
            <button 
              onClick={handleClick}
              className="bg-white text-accent hover:bg-gray-100 px-6 py-2 rounded-full font-bold text-xs sm:text-sm transition-colors shadow-sm whitespace-nowrap w-full md:w-auto flex items-center justify-center gap-3"
            >
              <span>Garantir Oferta Agora</span>
              <div className="flex gap-1 font-mono text-sm font-black bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                <span>00</span>:<span>{minutes.toString().padStart(2, '0')}</span>:<span>{seconds.toString().padStart(2, '0')}</span>
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};