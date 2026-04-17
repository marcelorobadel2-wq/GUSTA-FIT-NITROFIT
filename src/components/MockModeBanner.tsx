import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

export const MockModeBanner: React.FC = () => {
  const [isMock, setIsMock] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkMode = async () => {
    try {
      const response = await api.get('/config/mock');
      setIsMock(response.data.isMockMode);
    } catch (error) {
      console.error("Erro ao checar status do banco de dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkMode();
  }, []);

  useEffect(() => {
    if (isMock) {
      document.body.classList.add('mock-banner-active');
    } else {
      document.body.classList.remove('mock-banner-active');
    }
    return () => document.body.classList.remove('mock-banner-active');
  }, [isMock]);

  const switchToMySql = async () => {
    const confirmation = window.confirm("Isso tentará ligar o sistema diretamente no banco MySQL definido no seu arquivo .env.\n\nSe o banco não estiver configurado ou online, o sistema vai gerar erro. Continuar?");
    
    if (confirmation) {
      try {
        const res = await api.post('/config/mock', { isMockMode: false });
        if (res.data.success) {
          alert('Conexão MySQL Realizada com sucesso! O painel será recarregado.');
          window.location.reload();
        }
      } catch (error: any) {
        alert(error.response?.data?.error || 'Erro ao comunicar com o servidor. A conexão com o MySQL falhou.');
      }
    }
  };

  if (loading || !isMock) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-red-600 text-white font-black py-2.5 px-4 flex flex-col md:flex-row justify-between items-center z-[100] text-xs sm:text-sm shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-2 md:mb-0">
        <span className="text-xl animate-pulse">⚠️</span>
        <span className="tracking-wide">
          MODO MOCKUP ATIVO (SIMULAÇÃO FANTASMA) - DADOS NÃO ESTÃO INDO PARA O BANCO DE DADOS
        </span>
      </div>
      
      <button 
        onClick={switchToMySql} 
        className="bg-white hover:bg-gray-100 text-red-600 px-5 py-1.5 rounded-full uppercase tracking-wider font-bold transition-all shadow-md active:scale-95"
      >
        Ligar MySQL (Produção)
      </button>
    </div>
  );
};
