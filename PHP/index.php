<?php
$pixKey = "+5531995341547";
$whatsappNumber = "5531995341547";
$currentYear = date("Y");
?>
<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gusta Fitness - Pilates Profissional em Casa</title>
    <meta name="description" content="Domine o Pilates Profissional em Casa. O programa definitivo para definir o corpo e eliminar dores.">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#667eea',
                        secondary: '#764ba2',
                        accent: '#F27D26',
                        error: '#EF4444',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Montserrat', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
        .animate-pulse-subtle {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .7; }
        }
        .modal-backdrop {
            background-color: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(4px);
        }
        .hidden-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
            opacity: 0;
        }
        .expanded-content {
            max-height: 1000px;
            opacity: 1;
        }
    </style>
</head>
<body class="font-sans text-gray-800 antialiased bg-white">

    <!-- Progress Bar -->
    <div id="progress-bar" class="fixed top-0 left-0 h-1 bg-accent z-[100] transition-all duration-300" style="width: 0%"></div>

    <!-- Hero Section -->
    <section class="relative pt-20 md:pt-32 pb-16 md:pb-20 px-4 overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
        <div class="container mx-auto max-w-6xl relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                <div class="flex-1 text-center lg:text-left">
                    <div class="inline-block px-4 py-2 bg-white/20 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 backdrop-blur-sm border border-white/30">
                        🔥 +15.000 Alunas Transformadas
                    </div>
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight mb-4 md:mb-6 text-white drop-shadow-md">
                        Domine o Pilates <span class="hidden sm:inline"><br/></span>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-accent">
                            Profissional em Casa
                        </span>
                    </h1>
                    <p class="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        O programa definitivo para definir o corpo, eliminar dores nas costas e recuperar a flexibilidade. Sem equipamentos caros, no seu próprio ritmo.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <a href="#pricing" class="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-extrabold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 w-full sm:w-auto text-center">
                            QUERO COMEÇAR AGORA
                        </a>
                        <div class="flex items-center gap-2 text-xs sm:text-sm font-medium opacity-90">
                            <i data-lucide="shield-check" class="text-green-400 w-5 h-5"></i>
                            <span>Garantia de 30 Dias</span>
                        </div>
                    </div>
                    <div class="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-white/80">
                        <div class="flex -space-x-3">
                            <img src="https://picsum.photos/seed/1/40/40" class="w-10 h-10 rounded-full border-2 border-primary object-cover">
                            <img src="https://picsum.photos/seed/2/40/40" class="w-10 h-10 rounded-full border-2 border-primary object-cover">
                            <img src="https://picsum.photos/seed/3/40/40" class="w-10 h-10 rounded-full border-2 border-primary object-cover">
                            <img src="https://picsum.photos/seed/4/40/40" class="w-10 h-10 rounded-full border-2 border-primary object-cover">
                        </div>
                        <div>
                            <div class="text-yellow-400">★★★★★</div>
                            <p>4.9/5 baseado em 2.347 avaliações</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1 w-full max-w-xl">
                    <div class="relative aspect-video rounded-2xl bg-black/20 backdrop-blur-md shadow-2xl border border-white/20 overflow-hidden group cursor-pointer">
                        <img src="https://picsum.photos/seed/pilates-video/800/450" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 transition-transform">
                                <i data-lucide="play-circle" class="text-primary w-10 h-10"></i>
                            </div>
                        </div>
                        <div class="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-xs font-bold">
                            ASSISTA AO VÍDEO (02:15)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section class="py-16 md:py-20 bg-gray-50">
        <div class="container mx-auto px-4 max-w-5xl">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-4">
                    Você se identifica com isso?
                </h2>
                <p class="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                    A maioria das pessoas desiste de cuidar da saúde por causa dessas barreiras invisíveis.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div class="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-error flex items-start gap-4">
                    <div class="text-error bg-red-50 p-2 md:p-3 rounded-full shrink-0"><i data-lucide="dollar-sign"></i></div>
                    <p class="text-sm md:text-base font-medium text-gray-700 leading-snug pt-1">Mensalidades de estúdio custam mais de R$ 400,00/mês</p>
                </div>
                <div class="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-error flex items-start gap-4">
                    <div class="text-error bg-red-50 p-2 md:p-3 rounded-full shrink-0"><i data-lucide="clock"></i></div>
                    <p class="text-sm md:text-base font-medium text-gray-700 leading-snug pt-1">Falta de tempo para se deslocar até a academia</p>
                </div>
                <div class="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-error flex items-start gap-4">
                    <div class="text-error bg-red-50 p-2 md:p-3 rounded-full shrink-0"><i data-lucide="battery-low"></i></div>
                    <p class="text-sm md:text-base font-medium text-gray-700 leading-snug pt-1">Dores constantes nas costas e pescoço</p>
                </div>
                <div class="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-error flex items-start gap-4">
                    <div class="text-error bg-red-50 p-2 md:p-3 rounded-full shrink-0"><i data-lucide="activity"></i></div>
                    <p class="text-sm md:text-base font-medium text-gray-700 leading-snug pt-1">Sensação de corpo travado e sem flexibilidade</p>
                </div>
                <div class="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-error flex items-start gap-4">
                    <div class="text-error bg-red-50 p-2 md:p-3 rounded-full shrink-0"><i data-lucide="frown"></i></div>
                    <p class="text-sm md:text-base font-medium text-gray-700 leading-snug pt-1">Vergonha de treinar em ambientes lotados</p>
                </div>
                <div class="bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 border-error flex items-start gap-4">
                    <div class="text-error bg-red-50 p-2 md:p-3 rounded-full shrink-0"><i data-lucide="x-circle"></i></div>
                    <p class="text-sm md:text-base font-medium text-gray-700 leading-snug pt-1">Aulas genéricas que não focam na sua necessidade</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Solution Section -->
    <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
            <div class="text-center mb-12 md:mb-16">
                <span class="text-primary font-bold tracking-wider uppercase text-xs md:text-sm">A Solução Definitiva</span>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-gray-900 mt-2 mb-4 md:mb-6">
                    O Método Gusta Fitness é Diferente
                </h2>
                <p class="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Não é apenas "alongamento". É um sistema completo de reestruturação corporal baseado nos princípios originais de Joseph Pilates, adaptado para sua sala.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                <div class="bg-gray-50 rounded-2xl p-6 md:p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div class="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 md:mb-6">
                        <i data-lucide="target" class="w-8 h-8 md:w-12 md:h-12 text-primary"></i>
                    </div>
                    <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Método 3-em-1</h3>
                    <p class="text-sm md:text-base text-gray-600 leading-relaxed">Une fortalecimento muscular, flexibilidade e consciência corporal em cada movimento.</p>
                </div>
                <div class="bg-gray-50 rounded-2xl p-6 md:p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div class="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 md:mb-6">
                        <i data-lucide="heart" class="w-8 h-8 md:w-12 md:h-12 text-accent"></i>
                    </div>
                    <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Sem Impacto</h3>
                    <p class="text-sm md:text-base text-gray-600 leading-relaxed">Exercícios seguros para suas articulações, ideal para quem tem dores ou está voltando agora.</p>
                </div>
                <div class="bg-gray-50 rounded-2xl p-6 md:p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div class="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 md:mb-6">
                        <i data-lucide="zap" class="w-8 h-8 md:w-12 md:h-12 text-yellow-500"></i>
                    </div>
                    <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800">Resultados Rápidos</h3>
                    <p class="text-sm md:text-base text-gray-600 leading-relaxed">Com apenas 20 minutos por dia, sinta a diferença na postura e na disposição em 2 semanas.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 md:py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-10 md:mb-12 font-heading text-gray-900">
                O que nossas alunas dizem
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div class="bg-white p-5 md:p-6 rounded-xl shadow-md border border-gray-100">
                    <div class="flex items-center gap-4 mb-4">
                        <img src="https://picsum.photos/seed/user1/100/100" class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-sm md:text-base font-bold text-gray-900">Ana Silva, 34 anos</h4>
                            <div class="flex text-yellow-400">★★★★★</div>
                        </div>
                    </div>
                    <p class="text-sm md:text-base text-gray-600 italic">"Eu sentia dores horríveis na lombar por trabalhar sentada. Em 3 semanas de Gusta Fitness, as dores sumiram! O melhor investimento que fiz."</p>
                </div>
                <div class="bg-white p-5 md:p-6 rounded-xl shadow-md border border-gray-100">
                    <div class="flex items-center gap-4 mb-4">
                        <img src="https://picsum.photos/seed/user2/100/100" class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-sm md:text-base font-bold text-gray-900">Carla Mendes, 42 anos</h4>
                            <div class="flex text-yellow-400">★★★★★</div>
                        </div>
                    </div>
                    <p class="text-sm md:text-base text-gray-600 italic">"Nunca gostei de academia. O pilates em casa me deu liberdade. As aulas são curtas e intensas, já perdi 4kg e me sinto muito mais disposta."</p>
                </div>
                <div class="bg-white p-5 md:p-6 rounded-xl shadow-md border border-gray-100">
                    <div class="flex items-center gap-4 mb-4">
                        <img src="https://picsum.photos/seed/user3/100/100" class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-sm md:text-base font-bold text-gray-900">Patrícia Souza, 29 anos</h4>
                            <div class="flex text-yellow-400">★★★★★</div>
                        </div>
                    </div>
                    <p class="text-sm md:text-base text-gray-600 italic">"A didática é incrível. Mesmo sendo online, parece que o professor está do lado corrigindo a postura. Recomendo demais!"</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div class="absolute top-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary rounded-full blur-[80px] md:blur-[120px]"></div>
            <div class="absolute bottom-[-20%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-secondary rounded-full blur-[70px] md:blur-[100px]"></div>
        </div>
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-4">
                    Invista na sua Saúde <span class="text-accent">Hoje</span>
                </h2>
                <p class="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">Escolha o melhor plano para o seu objetivo. Preços promocionais por tempo limitado.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
                
                <!-- Monthly -->
                <div class="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 opacity-90 md:opacity-80 hover:opacity-100 transition-opacity order-2 md:order-1">
                    <h3 class="text-lg md:text-xl font-bold text-gray-300">Mensal</h3>
                    <div class="my-4 md:my-6">
                        <span class="text-xs md:text-sm text-gray-400 line-through">R$ 69,90</span>
                        <div class="text-3xl md:text-4xl font-bold">R$ 49,90<span class="text-xs md:text-sm font-normal text-gray-400">/mês</span></div>
                    </div>
                    <button onclick="togglePlan('monthly')" class="flex items-center gap-2 text-primary text-sm font-bold mb-6 hover:text-primary/80 transition-colors">
                        <span id="monthly-toggle-text">Ver benefícios</span> <i id="monthly-toggle-icon" data-lucide="chevron-down" class="w-4 h-4"></i>
                    </button>
                    <div id="monthly-features" class="hidden-content">
                        <ul class="space-y-3 md:space-y-4 mb-6 md:mb-8">
                            <li class="flex items-start gap-3 text-xs md:text-sm text-gray-300"><i data-lucide="check" class="text-green-400 w-4 h-4 mt-1"></i> Acesso a +120 aulas gravadas</li>
                            <li class="flex items-start gap-3 text-xs md:text-sm text-gray-300"><i data-lucide="check" class="text-green-400 w-4 h-4 mt-1"></i> Calendário de treinos</li>
                            <li class="flex items-start gap-3 text-xs md:text-sm text-gray-300"><i data-lucide="check" class="text-green-400 w-4 h-4 mt-1"></i> Suporte direto</li>
                        </ul>
                    </div>
                    <button onclick="openPayment('Mensal', 'R$ 49,90')" class="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-full font-bold transition-all">Assinar Mensal</button>
                </div>

                <!-- Lifetime -->
                <div class="bg-gradient-to-b from-primary to-secondary rounded-2xl p-6 md:p-8 border-2 border-accent shadow-2xl relative order-1 md:order-2 z-20">
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap">MAIS VENDIDO</div>
                    <h3 class="text-xl md:text-2xl font-bold text-white">Acesso VITALÍCIO</h3>
                    <p class="text-white/80 text-xs md:text-sm mt-1">Pague uma única vez, use para sempre</p>
                    <div class="my-4 md:my-6">
                        <span class="text-sm md:text-base text-white/60 line-through">De R$ 997,00</span>
                        <div class="text-4xl md:text-5xl font-extrabold text-white">R$ 297,00</div>
                        <span class="text-xs md:text-sm bg-white/20 px-2 py-1 rounded mt-2 inline-block">ou 12x de R$ 29,70</span>
                    </div>
                    <button onclick="togglePlan('lifetime')" class="flex items-center gap-2 text-yellow-300 text-sm font-bold mb-6 hover:text-yellow-200 transition-colors">
                        <span id="lifetime-toggle-text">Ver benefícios</span> <i id="lifetime-toggle-icon" data-lucide="chevron-down" class="w-4 h-4"></i>
                    </button>
                    <div id="lifetime-features" class="hidden-content">
                        <ul class="space-y-3 md:space-y-4 mb-6 md:mb-8">
                            <li class="flex items-start gap-3 text-xs md:text-sm font-medium"><i data-lucide="check" class="text-white w-4 h-4 mt-1"></i> Acesso a +120 aulas gravadas</li>
                            <li class="flex items-start gap-3 text-xs md:text-sm font-medium"><i data-lucide="check" class="text-white w-4 h-4 mt-1"></i> Calendário Completo</li>
                            <li class="flex items-start gap-3 text-xs md:text-sm font-medium"><i data-lucide="check" class="text-white w-4 h-4 mt-1"></i> Suporte Vitalício</li>
                            <li class="flex items-start gap-3 text-xs md:text-sm font-bold text-yellow-300"><i data-lucide="check" class="text-yellow-300 w-4 h-4 mt-1"></i> + 4 Bônus Exclusivos</li>
                        </ul>
                    </div>
                    <button onclick="openPayment('Vitalício', 'R$ 297,00')" class="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-full font-bold transition-all shadow-xl">QUERO ACESSO VITALÍCIO</button>
                    <p class="text-center text-[10px] md:text-xs text-white/60 mt-4">Economia de R$ 700,00 hoje</p>
                </div>

                <!-- Annual -->
                <div class="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 opacity-90 md:opacity-80 hover:opacity-100 transition-opacity order-3">
                    <h3 class="text-lg md:text-xl font-bold text-gray-300">Anual</h3>
                    <div class="my-4 md:my-6">
                        <span class="text-xs md:text-sm text-gray-400 line-through">R$ 598,00</span>
                        <div class="text-3xl md:text-4xl font-bold">R$ 197,00<span className="text-xs md:text-sm font-normal text-gray-400">/ano</span></div>
                    </div>
                    <button onclick="togglePlan('annual')" class="flex items-center gap-2 text-primary text-sm font-bold mb-6 hover:text-primary/80 transition-colors">
                        <span id="annual-toggle-text">Ver benefícios</span> <i id="annual-toggle-icon" data-lucide="chevron-down" class="w-4 h-4"></i>
                    </button>
                    <div id="annual-features" class="hidden-content">
                        <ul class="space-y-3 md:space-y-4 mb-6 md:mb-8">
                            <li class="flex items-start gap-3 text-xs md:text-sm text-gray-300"><i data-lucide="check" class="text-green-400 w-4 h-4 mt-1"></i> Acesso a +120 aulas gravadas</li>
                            <li class="flex items-start gap-3 text-xs md:text-sm text-gray-300"><i data-lucide="check" class="text-green-400 w-4 h-4 mt-1"></i> Calendário Anual</li>
                        </ul>
                    </div>
                    <button onclick="openPayment('Anual', 'R$ 197,00')" class="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-full font-bold transition-all">Assinar Anual</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Guarantee Section -->
    <section class="py-12 md:py-16 bg-gradient-to-br from-green-50 to-white">
        <div class="container mx-auto px-4 max-w-4xl text-center">
            <div class="inline-block p-3 md:p-4 bg-white rounded-full shadow-lg mb-4 md:mb-6">
                <i data-lucide="shield-check" class="text-green-500 w-12 h-12 md:w-16 md:h-16"></i>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold font-heading mb-4 text-gray-900">Risco Zero: Garantia Incondicional de 30 Dias</h2>
            <p class="text-sm md:text-lg text-gray-600 mb-8 leading-relaxed">
                Inscreva-se, assista às aulas e pratique. Se em 30 dias você não sentir diferença no seu corpo ou simplesmente achar que não é para você, basta enviar um único e-mail. Devolveremos 100% do seu investimento. Sem letras miúdas.
            </p>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-20 bg-white">
        <div class="container mx-auto px-4 max-w-3xl">
            <h2 class="text-2xl sm:text-3xl font-bold text-center font-heading mb-10 md:mb-12 text-gray-900">Perguntas Frequentes</h2>
            <div class="space-y-3 md:space-y-4">
                <div class="border border-gray-200 rounded-lg overflow-hidden">
                    <button onclick="toggleFaq('faq-1')" class="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span class="text-sm md:text-base font-semibold text-gray-800 pr-4">Preciso de equipamentos?</span>
                        <i id="faq-1-icon" data-lucide="plus" class="text-primary w-5 h-5"></i>
                    </button>
                    <div id="faq-1-content" class="hidden-content bg-gray-50 border-t border-gray-100">
                        <div class="p-4 md:p-5 text-xs md:text-sm text-gray-600">Não! Todo o método é baseado no Pilates Solo (Mat Pilates). Você só precisa de um espaço no chão e, se quiser, um colchonete ou toalha.</div>
                    </div>
                </div>
                <div class="border border-gray-200 rounded-lg overflow-hidden">
                    <button onclick="toggleFaq('faq-2')" class="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span class="text-sm md:text-base font-semibold text-gray-800 pr-4">Sou totalmente iniciante, consigo acompanhar?</span>
                        <i id="faq-2-icon" data-lucide="plus" class="text-primary w-5 h-5"></i>
                    </button>
                    <div id="faq-2-content" class="hidden-content bg-gray-50 border-t border-gray-100">
                        <div class="p-4 md:p-5 text-xs md:text-sm text-gray-600">Sim. Temos um módulo inteiro 'Começando do Zero' onde explicamos respiração, postura e movimentos básicos passo a passo.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12 pb-32 md:pb-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div class="text-center sm:text-left">
                    <h3 class="text-white text-xl font-bold font-heading mb-4">GUSTA<span class="text-primary">FITNESS</span></h3>
                    <p class="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">Transformando vidas através do movimento consciente. Nossa missão é levar saúde e bem-estar para dentro da sua casa.</p>
                </div>
                <div class="text-center sm:text-left">
                    <h4 class="text-white font-bold mb-4">Links Rápidos</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-primary transition-colors">Sobre Nós</a></li>
                        <li><a href="#pricing" class="hover:text-primary transition-colors">Planos</a></li>
                    </ul>
                </div>
                <div class="text-center sm:text-left">
                    <h4 class="text-white font-bold mb-4">Legal</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-primary transition-colors">Termos de Uso</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Política de Privacidade</a></li>
                    </ul>
                </div>
                <div class="text-center sm:text-left">
                    <h4 class="text-white font-bold mb-4">Contato</h4>
                    <ul class="space-y-2 text-sm flex flex-col items-center sm:items-start">
                        <li class="flex items-center gap-2"><i data-lucide="mail" class="w-4 h-4"></i> suporte@gustafitness.com</li>
                        <li class="flex gap-4 mt-4">
                            <a href="#" class="hover:text-primary transition-colors p-2 bg-gray-800 rounded-full"><i data-lucide="instagram" class="w-4 h-4"></i></a>
                            <a href="#" class="hover:text-primary transition-colors p-2 bg-gray-800 rounded-full"><i data-lucide="facebook" class="w-4 h-4"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 pt-8 text-center text-[10px] md:text-xs text-gray-500">
                <p>&copy; <?php echo $currentYear; ?> Gusta Fitness. Todos os direitos reservados.</p>
                <p class="mt-2 px-4">Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc.</p>
            </div>
        </div>
    </footer>

    <!-- Urgency Banner -->
    <div id="urgency-banner" class="fixed bottom-0 left-0 w-full bg-accent text-white py-3 px-4 z-40 shadow-lg border-t border-white/20 transition-transform duration-500">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3">
            <div class="flex items-center gap-2 text-center sm:text-left">
                <span class="animate-pulse bg-white text-accent px-2 py-0.5 rounded text-[10px] font-bold uppercase">Últimas Vagas</span>
                <p class="text-xs sm:text-sm font-medium">Desconto de <span class="font-bold">70%</span> encerra em:</p>
            </div>
            <button onclick="handleBannerClick()" class="bg-white text-accent hover:bg-gray-100 px-6 py-2 rounded-full font-bold text-xs sm:text-sm transition-colors shadow-sm whitespace-nowrap w-full md:w-auto flex items-center justify-center gap-3">
                <span>Garantir Oferta Agora</span>
                <div class="flex gap-1 font-mono text-sm font-black bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                    <span id="timer-min">15</span>:<span id="timer-sec">00</span>
                </div>
            </button>
        </div>
    </div>

    <!-- Payment Modal -->
    <div id="payment-modal" class="fixed inset-0 z-[60] flex items-center justify-center p-4 hidden">
        <div onclick="closePayment()" class="absolute inset-0 modal-backdrop"></div>
        <div class="relative w-full max-w-sm bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div class="p-4 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-primary/10 to-transparent">
                <div>
                    <h3 class="text-lg font-bold text-white font-heading">Finalizar Assinatura</h3>
                    <p class="text-[10px] text-gray-400">Plano: <span id="modal-plan-name" class="text-accent font-bold"></span></p>
                </div>
                <button onclick="closePayment()" class="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                    <i data-lucide="x" class="text-gray-400 w-5 h-5"></i>
                </button>
            </div>
            <div class="p-6">
                <div class="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                    <div class="flex items-center gap-2 mb-2 text-accent">
                        <i data-lucide="qr-code" class="w-5 h-5"></i>
                        <span class="font-bold uppercase tracking-wider text-xs">Pagamento via PIX</span>
                    </div>
                    <p class="text-[10px] text-gray-400 mb-3 leading-relaxed">Utilize a chave abaixo para realizar o pagamento no seu banco.</p>
                    <div class="relative group">
                        <div id="pix-key-display" class="w-full bg-black/40 border border-white/10 rounded-lg p-3 pr-10 font-mono text-xs text-white break-all"><?php echo $pixKey; ?></div>
                        <button onclick="copyPixKey()" class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded-md transition-colors text-accent">
                            <i id="copy-icon" data-lucide="copy" class="w-4 h-4"></i>
                        </button>
                    </div>
                    <p id="copy-feedback" class="text-[9px] text-green-400 mt-1.5 text-center font-bold hidden">Chave copiada!</p>
                </div>
                <div class="space-y-2.5 mb-6">
                    <div class="flex items-start gap-2.5">
                        <div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0 mt-0.5">1</div>
                        <p class="text-[10px] text-gray-300">Copie a chave ou use o número <span class="text-white font-bold">(31) 99534-1547</span></p>
                    </div>
                    <div class="flex items-start gap-2.5">
                        <div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0 mt-0.5">2</div>
                        <p class="text-[10px] text-gray-300">Pague o valor de <span id="modal-plan-price" class="text-white font-bold"></span></p>
                    </div>
                    <div class="flex items-start gap-2.5">
                        <div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0 mt-0.5">3</div>
                        <p class="text-[10px] text-gray-300">Envie o comprovante pelo WhatsApp abaixo.</p>
                    </div>
                </div>
                <button onclick="sendComprovante()" class="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-full font-bold transition-all text-xs sm:text-sm shadow-accent/20">ENVIAR COMPROVANTE</button>
                <div class="mt-4 flex items-center justify-center gap-2 text-[9px] text-gray-500 uppercase tracking-widest text-center">
                    <i data-lucide="smartphone" class="w-3 h-3"></i>
                    <span>liberação imediata após<br />verificação de pagamento</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Progress Bar Logic
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("progress-bar").style.width = scrolled + "%";
        });

        // Pricing Toggles
        function togglePlan(plan) {
            const content = document.getElementById(plan + '-features');
            const icon = document.getElementById(plan + '-toggle-icon');
            const text = document.getElementById(plan + '-toggle-text');
            
            if (content.classList.contains('expanded-content')) {
                content.classList.remove('expanded-content');
                text.innerText = 'Ver benefícios';
                icon.setAttribute('data-lucide', 'chevron-down');
            } else {
                content.classList.add('expanded-content');
                text.innerText = 'Ver menos';
                icon.setAttribute('data-lucide', 'chevron-up');
            }
            lucide.createIcons();
        }

        // FAQ Toggles
        function toggleFaq(id) {
            const content = document.getElementById(id + '-content');
            const icon = document.getElementById(id + '-icon');
            
            if (content.classList.contains('expanded-content')) {
                content.classList.remove('expanded-content');
                icon.setAttribute('data-lucide', 'plus');
            } else {
                content.classList.add('expanded-content');
                icon.setAttribute('data-lucide', 'minus');
            }
            lucide.createIcons();
        }

        // Countdown Timer
        let timeLeft = 15 * 60; // 15 minutes
        const timerMin = document.getElementById('timer-min');
        const timerSec = document.getElementById('timer-sec');

        function updateTimer() {
            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
            timerMin.innerText = mins.toString().padStart(2, '0');
            timerSec.innerText = secs.toString().padStart(2, '0');
            if (timeLeft > 0) timeLeft--;
        }
        setInterval(updateTimer, 1000);

        // Banner Click
        function handleBannerClick() {
            document.getElementById('urgency-banner').style.transform = 'translateY(100%)';
            window.location.href = '#pricing';
            setTimeout(() => {
                document.getElementById('urgency-banner').style.transform = 'translateY(0)';
            }, 60000);
        }

        // Payment Modal Logic
        let currentPlan = '';
        let currentPrice = '';

        function openPayment(plan, price) {
            currentPlan = plan;
            currentPrice = price;
            document.getElementById('modal-plan-name').innerText = plan;
            document.getElementById('modal-plan-price').innerText = price;
            document.getElementById('payment-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closePayment() {
            document.getElementById('payment-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function copyPixKey() {
            const key = document.getElementById('pix-key-display').innerText;
            navigator.clipboard.writeText(key).then(() => {
                const feedback = document.getElementById('copy-feedback');
                const icon = document.getElementById('copy-icon');
                feedback.classList.remove('hidden');
                icon.setAttribute('data-lucide', 'check-circle-2');
                lucide.createIcons();
                setTimeout(() => {
                    feedback.classList.add('hidden');
                    icon.setAttribute('data-lucide', 'copy');
                    lucide.createIcons();
                }, 2000);
            });
        }

        function sendComprovante() {
            const message = encodeURIComponent(`Olá! Acabei de realizar o pagamento do plano ${currentPlan} (${currentPrice}) via PIX. Segue o comprovante em anexo.`);
            window.open(`https://wa.me/<?php echo $whatsappNumber; ?>?text=${message}`, '_blank');
        }
    </script>
</body>
</html>
