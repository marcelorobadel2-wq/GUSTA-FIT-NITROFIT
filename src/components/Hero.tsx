import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { PlayCircle, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative pt-24 md:pt-36 pb-16 md:pb-24 px-4 overflow-hidden bg-neutral-warm text-gray-900 border-b border-gray-100">
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

          {/* Video / YouTube Shorts Integration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Moldura Estilo Pilates/Moderno - Vertical 9:16 */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-[2.5rem] bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-2 shadow-[0_20px_50px_-12px_rgba(118,75,162,0.3)] border border-white group">
              
              {/* Efeito de brilho/aura externa */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-[2.5rem] blur opacity-20 -z-10 transition-opacity duration-500 group-hover:opacity-40"></div>

              {/* Container do Iframe do YouTube */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative border-[6px] border-white shadow-inner pointer-events-auto">
                
                {!isVideoPlaying ? (
                  <div 
                    className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-gray-900 group-hover:scale-105 transition-transform duration-700"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    {/* Thumbnail real do vídeo do YouTube em alta qualidade */}
                    <img 
                      src="https://i.ytimg.com/vi/_c-vMwhUvCs/maxresdefault.jpg" 
                      alt="Thumbnail do Vídeo" 
                      className="absolute inset-0 w-full h-full object-cover opacity-70"
                      onError={(e) => {
                        // Fallback se maxresdefault não existir
                        e.currentTarget.src = "https://i.ytimg.com/vi/_c-vMwhUvCs/hqdefault.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="relative z-20 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                      <PlayCircle size={40} className="text-accent" />
                    </div>
                  </div>
                ) : (
                  <iframe 
                    src="https://www.youtube.com/embed/_c-vMwhUvCs?autoplay=1&modestbranding=1&rel=0&controls=0&showinfo=0&playsinline=1"
                    title="Gusta Fitness Shorts"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}

              </div>

              {/* Elementos decorativos */}
              <div className="absolute -left-6 sm:-left-8 top-1/4 bg-white p-3 rounded-full shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                <span className="text-xl sm:text-2xl">🧘‍♀️</span>
              </div>
              <div className="absolute -right-4 sm:-right-6 bottom-1/4 bg-white px-3 sm:px-4 py-2 rounded-2xl shadow-xl rotate-12 border border-gray-50">
                <span className="text-secondary font-black text-xs sm:text-sm tracking-widest uppercase">Pratique!</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};