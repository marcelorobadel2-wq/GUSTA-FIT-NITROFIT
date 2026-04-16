import React from 'react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A241D] text-gray-400 py-16 pb-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-2xl font-black font-heading tracking-tighter mb-6">GUSTA<span className="text-secondary">FITNESS</span></h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0 font-light">
              Transformando vidas através do movimento consciente. Nossa missão é levar saúde e bem-estar para dentro da sua casa de forma acessível e profissional.
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#pricing" className="hover:text-secondary transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Área do Aluno</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Política de Cookies</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-4 text-sm flex flex-col items-center sm:items-start">
              <li className="flex items-center gap-2"><Mail size={16} className="text-secondary" /> suporte@gustafitness.com</li>
              <li className="flex gap-4 mt-6">
                <a href="#" className="hover:text-white transition-colors p-3 bg-white/5 rounded-2xl border border-white/5"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white transition-colors p-3 bg-white/5 rounded-2xl border border-white/5"><Facebook size={20} /></a>
                <a href="#" className="hover:text-white transition-colors p-3 bg-white/5 rounded-2xl border border-white/5"><Youtube size={20} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 text-center text-[10px] md:text-sm text-gray-600">
          <p className="mb-4">&copy; {new Date().getFullYear()} Gusta Fitness. Todos os direitos reservados.</p>
          <p className="max-w-4xl mx-auto px-4 font-light leading-relaxed">Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc. Os resultados podem variar de pessoa para pessoa.</p>
        </div>
      </div>
    </footer>
  );
};