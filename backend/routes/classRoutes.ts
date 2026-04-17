import { Router } from 'express';
import { getClasses, createClass } from '../controllers/classController.js';
import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

// Aulas listadas apenas para usuários logados
router.get('/', authMiddleware, getClasses);

// Criação de aulas apenas para administradores
router.post('/', authMiddleware, adminMiddleware, createClass);

export default router;
