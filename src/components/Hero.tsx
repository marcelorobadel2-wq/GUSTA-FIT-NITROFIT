import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { PlayCircle, ShieldCheck, Users } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden bg-neutral-warm text-gray-900 border-b border-gray-100">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-xs md:text-sm font-bold mb-6 backdrop-blur-sm border border-secondary/20 text-primary">
              🌿 +15.000 Alunas Transformadas
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-[0.95] mb-6 tracking-tight text-gray-900">
              Domine o Pilates <span className="hidden sm:inline"><br/></span>
              <span className="text-accent">
                Profissional em Casa
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforme seu corpo, elimine dores e recupere sua flexibilidade com apenas 20 minutos por dia. O método definitivo sem mensalidades caras de estúdio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Button onClick={onCTAClick} size="xl" className="shadow-xl shadow-accent/20 w-full sm:w-auto text-base px-10">
                QUERO COMEÇAR AGORA
              </Button>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                <ShieldCheck size={20} className="text-success" />
                <span>Garantia de 30 Dias</span>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-5 text-sm">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user-${i}/48/48`} alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" />
                ))}
              </div>
              <div className="text-left">
                <div className="flex text-accent text-lg">★★★★★</div>
                <p className="font-semibold text-gray-700">4.9/5 <span className="text-gray-400 font-normal">baseado em 2.3k avaliações</span></p>
              </div>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="relative aspect-video rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden group cursor-pointer">
              <img src="https://picsum.photos/seed/pilates-video/1000/600" alt="Video Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 blur-none group-hover:blur-[2px]" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle size={48} className="text-accent" />
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-gray-900 border border-white/50 shadow-lg">
                ASSISTIR AGORA (02:15)
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};