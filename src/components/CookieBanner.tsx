import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '../hooks/useCookieConsent';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const { hasConsented, acceptCookies } = useCookieConsent();

  if (hasConsented) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-0 md:top-auto md:bottom-0 w-full bg-gray-900/95 backdrop-blur-sm text-white p-3 md:p-4 z-50 border-b md:border-t border-gray-700"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-[10px] md:text-sm text-gray-300 text-center md:text-left leading-tight">
            Usamos cookies para melhorar sua experiência e analisar o tráfego. Ao continuar, você concorda com nossa Política de Privacidade.
          </p>
          <Button onClick={acceptCookies} size="sm" variant="primary" className="text-[10px] md:text-xs py-1.5 md:py-2">
            Aceitar e Continuar
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};