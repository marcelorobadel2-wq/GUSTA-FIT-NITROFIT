import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const items: FAQItem[] = [
    { id: '1', question: "Preciso de equipamentos?", answer: "Não! Todo o método é baseado no Pilates Solo (Mat Pilates). Você só precisa de um espaço no chão e, se quiser, um colchonete ou toalha." },
    { id: '2', question: "Sou totalmente iniciante, consigo acompanhar?", answer: "Sim. Temos um módulo inteiro 'Começando do Zero' onde explicamos respiração, postura e movimentos básicos passo a passo." },
    { id: '3', question: "Por quanto tempo terei acesso?", answer: "No plano Vitalício, o acesso é para sempre. Você pode assistir quantas vezes quiser, no seu ritmo." },
    { id: '4', question: "E se eu não gostar?", answer: "Você tem 30 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas." },
    { id: '5', question: "Como recebo o acesso?", answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login e senha para nossa plataforma exclusiva." },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center font-heading mb-10 md:mb-12 text-gray-900">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-3 md:space-y-4">
          {items.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm md:text-base font-semibold text-gray-800 pr-4">{item.question}</span>
                {openIndex === item.id ? <Minus className="text-primary shrink-0 w-4 h-4 md:w-5 md:h-5" /> : <Plus className="text-primary shrink-0 w-4 h-4 md:w-5 md:h-5" />}
              </button>
              
              <AnimatePresence>
                {openIndex === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-5 pt-0 text-xs md:text-sm text-gray-600 bg-gray-50 border-t border-gray-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};