# TUTORIAL COMPLETO: GUSTA FITNESS (SISTEMA HÍBRIDO)

Este documento foi gerado para guiar você na implantação, manutenção e uso da plataforma SaaS **Gusta Fitness**. 
O código-fonte principal que transformou o site em um sistema backend foi feito com Node.js + Prisma ORM + MySQL.

---

## 🏗️ 1. O SISTEMA DE BANCO DE DADOS HÍBRIDO (Mockup vs Produção)

A plataforma possui um sistema inteligente de intercâmbio de banco de dados para evitar "quebras" durante o seu desenvolvimento, onde você ainda não tem um banco de dados hospedado em nuvem (online).

### Como Funciona a Chave (Toggle)?
Em seu arquivo `.env`, você deve configurar as credenciais do seu banco de dados MySQL Real.
No entanto, caso esse arquivo não exista ou esteja mal configurado, o sistema assume via Backend que **estamos em modo de testes / Simulação (MOCKUP)**. 

No Modo Mockup:
- Uma barra ⚠️ **VERMELHA** surgirá no topo de todo o sistema para alertá-lo que o MySQL não está sendo atingido.
- Seus Alunos, Logins e Cadastros estarão sendo salvos *exclusivamente na Memória RAM (temporariamente)*.
- O botão dentro da própria barra vermelha ("Ligar MySQL") tentará fazer um teste de Força Bruta real no banco de dados.

### Como desativar a Barra Vermelha para sempre e usar o MySQL Real:
1. Abra o arquivo `.env` (se não tiver, crie-o na raiz do seu projeto ou copie o `.env.example`).
2. Cole a URL verdadeira do seu banco:
   `DATABASE_URL="mysql://root:SENHA_AQUI@localhost:3306/gusta_fitness"`
3. Na barra visual do site, clique no botão para "Ligar MySQL".
4. Ou simplesmente altere manualmente no arquivo `.env`: adicione a linha `USE_MOCK="false"` e reinicie o servidor.

---

## 🚀 2. COMO INICIAR O SISTEMA LOCALMENTE

A Stack oficial do seu aplicativo é:
- **Frontend**: Vite + React 19 + TailwindCSS v4
- **Backend**: Express + JWT + bcryptjs (Integrado no mesmo terminal)
- **Banco de Dados**: Prisma (MySQL)

Para ligar em seu computador:
1. Instale as dependências: `npm install`
   *(Se der conflito com pacotes de legados como Framer Motion, use `npm install --legacy-peer-deps`)*.
2. Atualize o Prisma com suas tabelas: `npx prisma db push`
3. Gere o Cliente Banco de Dados: `npx prisma generate`
4. Inicie o Servidor Node: `npm run dev`

*(A porta será servida automaticamente do back, integrando o middleware Frontend)*

---

## 🔒 3. CREDENCIAIS LOGO AO ABRIR (MOCKUP)

Quando estiver em modo Mockup (sem MySQL configurado), criamo uma base "Fantasma" com 1 usuário administrativo pronto para você testar o painel! 

Você pode acessar através dos dados:
- **Email:** `admin@teste.com` ou `aluno@teste.com`
- **Senha:** `123456`

*(Atenção: Ao realizar a mudança para o MySQL clicando na barra vermelha, estes usuários não existirão lá! Você terá de se cadastrar na API oficial pela primeira vez).*

---

## 🛠️ 4. ESTRUTURAS FÍSICAS RECOMENDADAS NO VPS (Ubuntu Linux)

Para colocar na linha de frente (Produção), você usará seu script `install_ubuntu.sh`.

- Ele apagará caches antigos do `/var/www/`.
- Clonará do Git.
- Realizará a instalação das bibliotecas Node.
- Configurará as portas via firewall do NGINX Reverse Proxy para apontar no localhost do app.

Lembre-se sempre de espelhar as variáveis de Produção da Hostinger ou da VPS:
```env
DATABASE_URL="mysql://usuario_real_bd:senha_online@host_aws:3306/nomebd"
JWT_SECRET="umachavebastantelongaenegocios"
USE_MOCK="false"
```

Quaisquer adições ou dúvidas, valide no repasse dos "Controllers" na pasta `/backend`.
