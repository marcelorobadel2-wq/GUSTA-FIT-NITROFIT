import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: "Ana Silva",
      age: 34,
      rating: 5,
      text: "Eu sentia dores horríveis na lombar por trabalhar sentada. Em 3 semanas de Gusta Fitness, as dores sumiram! O melhor investimento que fiz.",
      avatar: "https://picsum.photos/seed/user-ana/100/100"
    },
    {
      id: '2',
      name: "Carla Mendes",
      age: 42,
      rating: 5,
      text: "Nunca gostei de academia. O pilates em casa me deu liberdade. As aulas são curtas e intensas, já perdi 4kg e me sinto muito mais disposta.",
      avatar: "https://picsum.photos/seed/user-carla/100/100"
    },
    {
      id: '3',
      name: "Patrícia Souza",
      age: 29,
      rating: 5,
      text: "A didática é incrível. Mesmo sendo online, parece que o professor está do lado corrigindo a postura. Recomendo demais!",
      avatar: "https://picsum.photos/seed/user-patri/100/100"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Resultados Reais</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center font-heading text-gray-900 leading-tight">
            Vidas Transformadas <br />pelo <span className="text-primary italic">Movimento</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-warm p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] relative flex flex-col group hover:bg-primary/5 transition-colors duration-500"
            >
              <Quote className="absolute top-6 md:top-8 right-6 md:right-8 text-primary/10 w-12 h-12 md:w-16 md:h-16 pointer-events-none group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover shadow-lg border-2 border-white" />
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{t.name}</h4>
                  <p className="text-xs text-gray-400 font-medium">{t.age} anos • Aluna Vitalícia</p>
                </div>
              </div>

              <div className="flex text-yellow-500 mb-4 md:mb-6 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed italic mb-4">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
            <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
                Junte-se a +15.000 mulheres satisfeitas
            </p>
        </div>
      </div>
    </section>
  );
};