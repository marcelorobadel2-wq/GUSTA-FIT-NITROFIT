import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap } from 'lucide-react';
import { Pillar } from '../types';

export const SolutionSection: React.FC = () => {
  const pillars: Pillar[] = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Método 3-em-1",
      description: "Une fortalecimento muscular, flexibilidade e consciência corporal em cada movimento."
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: "Sem Impacto",
      description: "Exercícios seguros para suas articulações, ideal para quem tem dores ou está voltando agora."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Resultados Rápidos",
      description: "Com apenas 20 minutos por dia, sinta a diferença na postura e na disposição em 2 semanas."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden" 
           style={{ backgroundImage: 'radial-gradient(#4A5D4E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">A Metodologia</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-gray-900 mt-2 mb-6 leading-tight">
            Pilates que se Adapta à sua <span className="text-primary italic">Vida</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Desenvolvido para entregar resultados máximos no mínimo de espaço. Transforme sua sala em um estúdio profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-neutral-warm rounded-3xl md:rounded-[2rem] p-8 md:p-10 h-full border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="bg-white w-20 h-20 rounded-2xl shadow-xl shadow-gray-200/50 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  {React.cloneElement(pillar.icon as React.ReactElement, { className: "w-10 h-10 text-primary" })}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 font-heading">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom micro-copy */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
            <span className="w-8 h-[1px] bg-gray-400"></span>
            Acesso imediato após a compra
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
            Treine em qualquer lugar
            <span className="w-8 h-[1px] bg-gray-400"></span>
          </div>
        </div>
      </div>
    </section>
  );
};