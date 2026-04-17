import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ChevronLeft, Smartphone } from 'lucide-react';

const VIDEO_ID = '_c-vMwhUvCs';
const THUMBNAIL_URL = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const FALLBACK_THUMBNAIL = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export const TemplatePreview: React.FC = () => {
  const [playing, setPlaying] = useState<Record<number, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlay = (index: number) => {
    setPlaying({ ...playing, [index]: true });
  };

  const renderVideo = (index: number) => {
    if (playing[index]) {
      return (
        <iframe 
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&modestbranding=1&rel=0&controls=0&showinfo=0&playsinline=1`}
          title={`Gusta Fitness Shorts Template ${index}`}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    }
    
    return (
      <div 
        className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-gray-900 group-hover:scale-105 transition-transform duration-700"
        onClick={() => handlePlay(index)}
      >
        <img 
          src={THUMBNAIL_URL} 
          alt="Thumbnail" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onError={(e) => { e.currentTarget.src = FALLBACK_THUMBNAIL; }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
          <PlayCircle size={40} className="text-accent" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} 
          className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8 font-medium cursor-pointer"
        >
          <ChevronLeft size={20} className="mr-1" /> Voltar para o Início
        </a>
        
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mb-4">Galeria de Molduras</h1>
          <p className="text-lg text-gray-600">
            Diferentes estilos visuais aplicados ao mesmo vídeo. Teste o play e veja como cada moldura reage no formato vertical.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">

          {/* Template 1: O Original (Estilo Pilates) */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 text-gray-800">1. Natureza Orgânica</h3>
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-[2.5rem] bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-2 shadow-[0_20px_50px_-12px_rgba(118,75,162,0.3)] border border-white group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-[2.5rem] blur opacity-20 -z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative border-[6px] border-white shadow-inner pointer-events-auto">
                {renderVideo(1)}
              </div>
              <div className="absolute -left-6 top-1/4 bg-white p-3 rounded-full shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                <span className="text-2xl">🧘‍♀️</span>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white px-4 py-2 rounded-2xl shadow-xl rotate-12 border border-gray-50">
                <span className="text-secondary font-black text-sm tracking-widest uppercase">Pratique!</span>
              </div>
            </div>
          </div>

          {/* Template 2: Glassmorphism */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 text-gray-800">2. Vidro Premium (Glass)</h3>
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-[2rem] group">
              {/* Blur Effects Background */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative border border-white/40 shadow-2xl backdrop-blur-xl bg-white/10 pointer-events-auto">
                {renderVideo(2)}
              </div>
            </div>
          </div>

          {/* Template 3: Neo Brutalismo */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 text-gray-800">3. Neo-Brutalismo</h3>
            <div className="relative w-full max-w-[280px] aspect-[9/16] group">
              {/* Block shadow */}
              <div className="absolute inset-0 bg-accent rounded-xl translate-x-3 translate-y-3 border-4 border-gray-900 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              <div className="w-full h-full rounded-xl overflow-hidden bg-black relative border-4 border-gray-900 pointer-events-auto z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                {renderVideo(3)}
              </div>
              
              <div className="absolute -right-8 top-10 z-20 bg-yellow-300 border-2 border-gray-900 px-3 py-1 font-black transform rotate-6 shadow-[2px_2px_0px_#111827]">
                🔥 NOVO!
              </div>
            </div>
          </div>

          {/* Template 4: iPhone Mockup */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 text-gray-800">4. Device Mockup</h3>
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-[3rem] bg-gray-900 p-[10px] shadow-2xl group border border-gray-800">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20 pointer-events-none mt-[10px]">
                <div className="w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
              </div>
              
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-black relative pointer-events-auto">
                {renderVideo(4)}
              </div>
            </div>
          </div>

          {/* Template 5: Minimalista Flutuante */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 text-gray-800">5. Minimalista Suave</h3>
            <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-xl bg-white p-3 shadow-xl hover:shadow-2xl transition-shadow duration-500 group border border-gray-100">
              <div className="w-full h-full rounded-lg overflow-hidden bg-black relative pointer-events-auto">
                {renderVideo(5)}
              </div>
            </div>
          </div>

          {/* Template 6: Moldura de Foto Polaroid */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 text-gray-800">6. Estilo Polaroid</h3>
            <div className="relative w-full max-w-[280px] bg-white p-4 pb-16 shadow-xl transform hover:rotate-2 transition-transform duration-300 group border border-gray-100">
              <div className="w-full aspect-[9/16] rounded-sm overflow-hidden bg-black relative pointer-events-auto">
                {renderVideo(6)}
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center font-handwriting text-xl text-gray-600">
                Treino 01 🌿
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
