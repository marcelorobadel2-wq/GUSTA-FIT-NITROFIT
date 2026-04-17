import { Router } from 'express';
import { Request, Response } from 'express';
import { isMockMode, setMockMode } from '../mockState.js';
import { prisma } from '../prismaClient.js';

const router = Router();

router.get('/mock', (req: Request, res: Response) => {
  res.json({ isMockMode });
});

router.post('/mock', async (req: Request, res: Response) => {
  const { isMockMode: newMode } = req.body;

  if (newMode === false) {
    // Tenta conectar ao banco de dados MySQL para validar se é possível desligar o modo MOCK.
    try {
      await prisma.$connect();
      // Testou a conexão, deu certo = Aplica modo Real MySQL
      setMockMode(false);
      return res.json({ isMockMode: false, success: true, message: 'Conectado ao MySQL com sucesso.' });
    } catch (error) {
      console.error("MYSQL ERRO DE CONEXÃO: ", error);
      return res.status(500).json({ error: 'Erro de conexão SQL. O banco está rodando e configurado no .env?', fallbackToMock: true });
    }
  }

  // Ativando Modo Mock
  setMockMode(true);
  return res.json({ isMockMode: true, success: true, message: 'Modo Mockup ativado.' });
});

export default router;
