import bcrypt from 'bcryptjs';

// Retorna true por padrão a menos que esteja explicitamente false no .env
export let isMockMode = process.env.USE_MOCK !== 'false';

export const setMockMode = (mode: boolean) => {
  isMockMode = mode;
  console.log(`[SYS] Banco de Dados operando em modo: ${isMockMode ? 'MOCKUP' : 'MYSQL_REAL'}`);
};

// Gerar uma senha hash de teste para facilitar o login mockup imediato
const salt = bcrypt.genSaltSync(10);
const passwordHash = bcrypt.hashSync('123456', salt);

// Banco de dados em memória Ram (Fantasma)
export const mockDb = {
  users: [
    {
      id: 'mock-1',
      name: 'Aluno Mock',
      email: 'aluno@teste.com',
      password: passwordHash,
      role: 'student',
      createdAt: new Date()
    },
    {
      id: 'mock-2',
      name: 'Administrador Mock',
      email: 'admin@teste.com',
      password: passwordHash,
      role: 'admin',
      createdAt: new Date()
    }
  ] as any[],
  classes: [
    {
      id: 'class-1',
      title: 'Aula Inicial: Respiração Pilates',
      description: 'Aprenda os fundamentos da respiração costal essencial para todos os movimentos.',
      level: 'beginner',
      videoUrl: 'https://youtube.com/shorts/_c-vMwhUvCs?si=YaWIpF0NMu50uyIt',
      duration: 15,
      createdAt: new Date()
    }
  ] as any[]
};
