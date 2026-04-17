import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SplashScreen } from './components/SplashScreen';
import { ProgressBar } from './components/ProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner';
import { UrgencyBanner } from './components/UrgencyBanner';
import { PaymentModal } from './components/PaymentModal';
import { TemplatePreview } from './components/TemplatePreview';
import { getCourseSchema, getFAQSchema } from './utils/schemas';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll to pricing
  const scrollToPricing = () => {
    if (currentHash === '#templates') {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById('pricing');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (name: string, price: string) => {
    setSelectedPlan({ name, price });
    setIsPaymentModalOpen(true);
  };

  // SEO Schema Injection
  useEffect(() => {
    if (!loading) {
      const scriptCourse = document.createElement('script');
      scriptCourse.type = 'application/ld+json';
      scriptCourse.text = getCourseSchema();
      document.head.appendChild(scriptCourse);

      const scriptFAQ = document.createElement('script');
      scriptFAQ.type = 'application/ld+json';
      // Mock items for schema generation to match component
      const faqItems = [
        { id: '1', question: "Preciso de equipamentos?", answer: "Não! Todo o método é baseado no Pilates Solo (Mat Pilates). Você só precisa de um espaço no chão e, se quiser, um colchonete ou toalha." },
        { id: '2', question: "Sou totalmente iniciante, consigo acompanhar?", answer: "Sim. Temos um módulo inteiro 'Começando do Zero' onde explicamos respiração, postura e movimentos básicos passo a passo." },
        { id: '3', question: "Por quanto tempo terei acesso?", answer: "No plano Vitalício, o acesso é para sempre. Você pode assistir quantas vezes quiser, no seu ritmo." },
        { id: '4', question: "E se eu não gostar?", answer: "Você tem 30 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas." },
        { id: '5', question: "Como recebo o acesso?", answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login e senha para nossa plataforma exclusiva." },
      ];
      scriptFAQ.text = getFAQSchema(faqItems);
      document.head.appendChild(scriptFAQ);
      
      return () => {
        if (document.head.contains(scriptCourse)) {
          document.head.removeChild(scriptCourse);
        }
        if (document.head.contains(scriptFAQ)) {
          document.head.removeChild(scriptFAQ);
        }
      }
    }
  }, [loading]);

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-primary selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ProgressBar />
            <Navbar />
            
            {currentHash === '#templates' ? (
              <TemplatePreview />
            ) : (
              <>
                <main>
                  <Hero onCTAClick={scrollToPricing} />
                  <ProblemSection />
                  <SolutionSection />
                  <Testimonials />
                  <Pricing onSelectPlan={handleSelectPlan} />
                  <Guarantee />
                  <FAQ />
                </main>
                <Footer />
                <UrgencyBanner onCTAClick={scrollToPricing} />
                <WhatsAppButton />
                <CookieBanner />
              </>
            )}

            <PaymentModal 
              isOpen={isPaymentModalOpen} 
              onClose={() => setIsPaymentModalOpen(false)}
              planName={selectedPlan.name}
              price={selectedPlan.price}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;