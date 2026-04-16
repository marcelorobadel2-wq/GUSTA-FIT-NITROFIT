import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Activity, BatteryLow, DollarSign, Clock, Frown } from 'lucide-react';
import { Problem } from '../types';

export const ProblemSection: React.FC = () => {
  const problems: Problem[] = [
    { icon: <DollarSign size={32} />, text: "Mensalidades de estúdio custam mais de R$ 400,00/mês" },
    { icon: <Clock size={32} />, text: "Falta de tempo para se deslocar até a academia" },
    { icon: <BatteryLow size={32} />, text: "Dores constantes nas costas e pescoço" },
    { icon: <Activity size={32} />, text: "Sensação de corpo travado e sem flexibilidade" },
    { icon: <Frown size={32} />, text: "Vergonha de treinar em ambientes lotados" },
    { icon: <XCircle size={32} />, text: "Aulas genéricas que não focam na sua necessidade" },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 sticky top-24">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">O Problema</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 mb-6 leading-tight">
              Cansada de Viver com <span className="text-error italic">Limitações</span>?
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Cuidar da saúde se tornou um luxo caro e uma logística exaustiva. A maioria das pessoas desiste não por falta de vontade, mas pelas barreiras invisíveis do cotidiano.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5 group hover:border-error/20 transition-colors"
              >
                <div className="text-error bg-error/5 p-4 rounded-2xl group-hover:bg-error group-hover:text-white transition-all duration-300">
                  {React.cloneElement(problem.icon as React.ReactElement, { size: 24 })}
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800 leading-tight mb-2">
                    {problem.text.split(' ').slice(0, 3).join(' ')}
                  </p>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {problem.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};