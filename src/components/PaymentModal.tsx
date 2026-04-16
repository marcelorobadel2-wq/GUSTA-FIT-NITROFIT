import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, CheckCircle2, QrCode, Smartphone } from 'lucide-react';
import { Button } from './Button';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, planName, price }) => {
  const pixKey = "+5531995341547";
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(`Olá! Acabei de realizar o pagamento do plano ${planName} (${price}) via PIX. Segue o comprovante em anexo.`);
    window.open(`https://wa.me/5531995341547?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-sm bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-primary/10 to-transparent">
              <div>
                <h3 className="text-lg font-bold text-white font-heading">Finalizar Assinatura</h3>
                <p className="text-[10px] text-gray-400">Plano: <span className="text-accent font-bold">{planName}</span></p>
              </div>
              <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                <X size={18} className="text-gray-400" />
              </button>
            </div>

            <div className="p-6">
              {/* PIX Section */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <QrCode size={20} />
                  <span className="font-bold uppercase tracking-wider text-xs">Pagamento via PIX</span>
                </div>

                <p className="text-[10px] text-gray-400 mb-3 leading-relaxed">
                  Utilize a chave abaixo para realizar o pagamento no seu banco.
                </p>

                <div className="relative group">
                  <div className="w-full bg-black/40 border border-white/10 rounded-lg p-3 pr-10 font-mono text-xs text-white break-all">
                    {pixKey}
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded-md transition-colors text-accent"
                    title="Copiar chave"
                  >
                    {copied ? <CheckCircle2 size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[9px] text-green-400 mt-1.5 text-center font-bold"
                  >
                    Chave copiada!
                  </motion.p>
                )}
              </div>

              {/* Instructions */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0 mt-0.5">1</div>
                  <p className="text-[10px] text-gray-300">Copie a chave ou use o número <span className="text-white font-bold">(31) 99534-1547</span></p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0 mt-0.5">2</div>
                  <p className="text-[10px] text-gray-300">Pague o valor de <span className="text-white font-bold">{price}</span></p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0 mt-0.5">3</div>
                  <p className="text-[10px] text-gray-300">Envie o comprovante pelo WhatsApp abaixo.</p>
                </div>
              </div>

              {/* Action Button */}
              <Button 
                onClick={handleWhatsAppRedirect}
                fullWidth 
                size="md" 
                variant="accent"
                className="shadow-accent/20 text-xs sm:text-sm font-bold"
              >
                ENVIAR COMPROVANTE
              </Button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-[9px] text-gray-500 uppercase tracking-widest text-center">
                <Smartphone size={10} />
                <span>liberação imediata após<br />verificação de pagamento</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
