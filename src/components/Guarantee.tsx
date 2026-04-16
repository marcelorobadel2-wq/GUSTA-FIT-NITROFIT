import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-block p-3 md:p-4 bg-white rounded-full shadow-lg mb-4 md:mb-6">
          <ShieldCheck size={48} className="text-green-500 md:hidden" />
          <ShieldCheck size={64} className="text-green-500 hidden md:block" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-gray-900">
          Risco Zero: Garantia Incondicional de 30 Dias
        </h2>
        <p className="text-sm md:text-lg text-gray-600 mb-8 leading-relaxed">
          Inscreva-se, assista às aulas e pratique. Se em 30 dias você não sentir diferença no seu corpo ou simplesmente achar que não é para você, basta enviar um único e-mail. Devolveremos 100% do seu investimento. Sem letras miúdas.
        </p>
      </div>
    </section>
  );
};