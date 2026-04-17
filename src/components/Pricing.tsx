import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const features = [
    "Acesso a +120 aulas gravadas",
    "Calendário de treinos (Iniciante ao Avançado)",
    "Suporte direto com instrutores",
    "Acesso pelo celular, TV ou computador",
    "Comunidade exclusiva de alunas"
  ];

  const togglePlan = (plan: string) => {
    setExpandedPlan(expandedPlan === plan ? null : plan);
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#1A241D] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-secondary rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Investimento na sua Saúde</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-heading mb-6 leading-tight">
            Comece sua Mudança <span className="text-secondary">Hoje</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Escolha o plano ideal para transformar seu corpo e sua mente. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
          
          {/* Monthly Plan */}
          <div className="order-2 lg:order-1 bg-[#242F27] rounded-3xl p-8 md:p-10 border border-white/5 flex flex-col items-center text-center group transition-all duration-500 hover:border-secondary/30">
            <h3 className="text-xl md:text-2xl font-bold text-gray-400 mb-2 uppercase tracking-widest text-sm">Assinatura Mensal</h3>
            <div className="my-8">
              <span className="text-sm text-gray-500 line-through block mb-2">R$ 69,90</span>
              <div className="text-4xl md:text-5xl font-extrabold">R$ 49,90<span className="text-sm font-normal text-gray-500">/mês</span></div>
            </div>

            <button 
              onClick={() => togglePlan('monthly')}
              className="flex items-center gap-2 text-secondary text-xs uppercase tracking-widest font-bold mb-8 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1"
            >
              {expandedPlan === 'monthly' ? (
                <>Ocultar detalhes <ChevronUp size={14} /></>
              ) : (
                <>Ver benefícios <ChevronDown size={14} /></>
              )}
            </button>

            <AnimatePresence>
              {expandedPlan === 'monthly' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden w-full text-left"
                >
                  <ul className="space-y-4 mb-10 border-t border-white/5 pt-8">
                    {features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check size={18} className="text-secondary mt-0.5 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-auto w-full">
              <Button variant="white" fullWidth onClick={() => onSelectPlan('Mensal', 'R$ 49,90')} size="lg" className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-gray-900">ASSINAR MENSAL</Button>
            </div>
          </div>

          {/* LIFETIME OFFER - Highlighted */}
          <motion.div 
            whileHover={{ y: -12 }}
            className="order-1 lg:order-2 bg-primary rounded-3xl p-8 md:p-12 border-2 border-secondary shadow-[0_32px_64px_-16px_rgba(74,93,78,0.5)] relative flex flex-col items-center text-center z-20 lg:scale-105"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-xs md:text-sm font-black shadow-2xl uppercase tracking-tighter w-max">
              A Escolha de 90% das Alunas
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Acesso VITALÍCIO</h3>
            <p className="text-white/70 text-sm font-medium uppercase tracking-widest">Pagamento Único</p>
            
            <div className="my-8 md:my-10">
              <span className="text-base md:text-lg text-white/50 line-through block mb-2">De R$ 997,00</span>
              <div className="text-5xl md:text-6xl font-black text-white tracking-tight">R$ 297,00</div>
              <div className="mt-4 inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-xl text-sm font-bold text-secondary">
                12x de <span className="text-white text-lg">R$ 29,70</span>
              </div>
            </div>

            <button 
              onClick={() => togglePlan('lifetime')}
              className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest font-bold mb-8 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1"
            >
              {expandedPlan === 'lifetime' ? (
                <>Ver menos detalhes <ChevronUp size={14} /></>
              ) : (
                <>Ver todos os bônus <ChevronDown size={14} /></>
              )}
            </button>

            <AnimatePresence>
              {expandedPlan === 'lifetime' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden w-full text-left"
                >
                  <ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/90">
                        <Check size={18} className="text-secondary mt-0.5 shrink-0" /> {f}
                      </li>
                    ))}
                    <li className="flex items-start gap-3 text-sm font-black text-accent bg-white/10 p-3 rounded-lg">
                      <Check size={18} className="text-accent mt-0.5 shrink-0" /> + 4 Bônus Exclusivos
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="mt-auto w-full">
              <Button variant="accent" size="xl" fullWidth onClick={() => onSelectPlan('Vitalício', 'R$ 297,00')} className="shadow-2xl shadow-accent/40 py-6 text-lg">
                QUERO O MEU ACESSO
              </Button>
            </div>
          </motion.div>

          {/* Annual Plan */}
          <div className="order-3 lg:order-3 bg-[#242F27] rounded-3xl p-8 md:p-10 border border-white/5 flex flex-col items-center text-center group transition-all duration-500 hover:border-secondary/30">
            <h3 className="text-xl md:text-2xl font-bold text-gray-400 mb-2 uppercase tracking-widest text-sm">Assinatura Anual</h3>
            <div className="my-8">
              <span className="text-sm text-gray-500 line-through block mb-2">R$ 598,00</span>
              <div className="text-4xl md:text-5xl font-extrabold">R$ 197,00<span className="text-sm font-normal text-gray-500">/ano</span></div>
            </div>

            <button 
              onClick={() => togglePlan('annual')}
              className="flex items-center gap-2 text-secondary text-xs uppercase tracking-widest font-bold mb-8 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1"
            >
              {expandedPlan === 'annual' ? (
                <>Ocultar detalhes <ChevronUp size={14} /></>
              ) : (
                <>Ver benefícios <ChevronDown size={14} /></>
              )}
            </button>

            <AnimatePresence>
              {expandedPlan === 'annual' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden w-full text-left"
                >
                  <ul className="space-y-4 mb-10 border-t border-white/5 pt-8">
                    {features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check size={18} className="text-secondary mt-0.5 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-auto w-full">
              <Button variant="white" fullWidth onClick={() => onSelectPlan('Anual', 'R$ 197,00')} size="lg" className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-gray-900">ASSINAR ANUAL</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};