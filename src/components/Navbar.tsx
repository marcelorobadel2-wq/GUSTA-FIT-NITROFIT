import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Esta área de membros está em construção! (Em breve)");
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (hash === '') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (window.location.hash === '#templates' && hash !== '#templates') {
      window.location.hash = hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = hash;
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-1.5 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          {/* Menu Lateral - Esquerda */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 -ml-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
              aria-label="Abrir Menu"
            >
              <Menu size={26} />
            </button>
            <div className="hidden lg:block font-heading font-black text-xl tracking-tighter cursor-pointer select-none">
              GUSTA<span className="text-secondary">FITNESS</span>
            </div>
          </div>

          {/* Área de Login - Direita */}
          <form onSubmit={handleLogin} className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
            <input 
              type="email" 
              placeholder="E-mail" 
              className="w-[90px] sm:w-[140px] md:w-48 px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-gray-400"
              required
            />
            <input 
              type="password" 
              placeholder="Senha" 
              className="w-[90px] sm:w-[140px] md:w-48 px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-gray-400"
              required
            />
            <button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-white p-1.5 sm:px-5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-bold transition-colors shadow-sm flex items-center gap-2 border border-primary"
            >
              <span className="hidden sm:block">Entrar</span>
              <LogIn size={14} className="sm:hidden" />
            </button>
          </form>
        </div>
      </nav>

      {/* Menu Hamburger Aberto (Mobile / Sidebar) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-64 h-full bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-5 flex items-center justify-between border-b border-gray-100 bg-gray-50/50">
                <span className="font-heading font-black text-xl tracking-tighter">
                  GUSTA<span className="text-secondary">FIT</span>
                </span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-5 flex flex-col gap-2 text-gray-600 font-medium">
                <a href="#" onClick={(e) => handleNavigation(e, '')} className="hover:text-primary transition-colors p-3 rounded-xl hover:bg-primary/5">Início</a>
                <a href="#solucao" onClick={(e) => handleNavigation(e, '#solucao')} className="hover:text-primary transition-colors p-3 rounded-xl hover:bg-primary/5">O Método</a>
                <a href="#depoimentos" onClick={(e) => handleNavigation(e, '#depoimentos')} className="hover:text-primary transition-colors p-3 rounded-xl hover:bg-primary/5">Resultados</a>
                <a href="#faq" onClick={(e) => handleNavigation(e, '#faq')} className="hover:text-primary transition-colors p-3 rounded-xl hover:bg-primary/5">Dúvidas Frequentes</a>
                
                <div className="my-2 border-t border-gray-100"></div>
                <a href="#templates" onClick={(e) => handleNavigation(e, '#templates')} className="text-secondary hover:text-primary transition-colors p-3 rounded-xl hover:bg-secondary/5 font-bold flex items-center gap-2">
                  <span className="text-xl">✨</span> Galeria de Molduras
                </a>
                
                <div className="my-2 border-t border-gray-100"></div>
                
                <a href="#pricing" onClick={(e) => handleNavigation(e, '#pricing')} className="bg-primary hover:bg-primary/90 text-white rounded-xl p-3 flex items-center justify-between font-bold transition-colors shadow-md">
                  Acessar Planos
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider">Oferta</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
