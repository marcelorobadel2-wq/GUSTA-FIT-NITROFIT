import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-secondary overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <motion.div
              animate={{ opacity: [0, 1, 0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
              className="absolute -top-8 -left-8 md:-top-12 md:-left-12 text-yellow-300"
            >
              <Zap size={40} className="md:w-16 md:h-16" fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ opacity: [0, 1, 0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.3, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 text-yellow-300"
            >
              <Zap size={32} className="md:w-14 md:h-14" fill="currentColor" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading text-white tracking-tighter">
              GUSTA<span className="text-accent">FITNESS</span>
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-white/80 mt-4 text-lg font-medium tracking-widest uppercase"
          >
            Transforme seu corpo
          </motion.p>
        </motion.div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-purple-900 opacity-90" />
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 0.2, repeat: 4, repeatType: "reverse" }}
      />
    </motion.div>
  );
};