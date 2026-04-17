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
      const updateHeight = () => {
        const el = document.getElementById('mock-banner');
        if (el) {
          document.body.style.setProperty('--mock-banner-height', `${el.offsetHeight}px`);
        }
      };
      
      // Allow minor delay for render
      setTimeout(updateHeight, 50);
      window.addEventListener('resize', updateHeight);

      return () => {
        document.body.classList.remove('mock-banner-active');
        document.body.style.removeProperty('--mock-banner-height');
        window.removeEventListener('resize', updateHeight);
      };
    }
  }, [isMock]);

  // ... (switch handler omitted for brevity, keeping it identical)
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
    <div 
      id="mock-banner"
      className="fixed top-0 left-0 w-full bg-red-600 text-white font-black py-3 px-4 flex flex-col md:flex-row justify-between items-center z-[100] text-xs sm:text-sm shadow-xl transition-all duration-300"
      style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
    >
      <div className="flex items-center text-center md:text-left gap-2 mb-3 md:mb-0">
        <span className="text-2xl animate-pulse">⚠️</span>
        <span className="tracking-wide leading-tight">
          MODO MOCKUP ATIVO (SIMULAÇÃO FANTASMA) - DADOS NÃO VÃO PRO BANCO
        </span>
      </div>
      
      <button 
        onClick={switchToMySql} 
        className="bg-white hover:bg-gray-100 text-red-600 px-5 py-2 rounded-full uppercase tracking-wider font-bold transition-all shadow-md active:scale-95 w-full md:w-auto"
      >
        Ligar MySQL (Produção)
      </button>
    </div>
  );
};
