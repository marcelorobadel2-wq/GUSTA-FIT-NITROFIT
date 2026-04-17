import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../prismaClient.js';
import { isMockMode, mockDb } from '../mockState.js';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    if (isMockMode) {
      if (mockDb.users.find(u => u.email === email)) {
        return res.status(400).json({ error: 'E-mail já está em uso.' });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = {
        id: `mock-${Date.now()}`,
        name,
        email,
        password: hashedPassword,
        role: role || 'student',
        createdAt: new Date()
      };
      mockDb.users.push(user);
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
      return res.status(201).json({ user: { id: user.id, name, email, role }, token });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'E-mail já está em uso.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role: role || 'student' },
      select: { id: true, name: true, email: true, role: true }
    });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    return res.status(201).json({ user, token });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (isMockMode) {
      const user = mockDb.users.find(u => u.email === email);
      if (!user) return res.status(401).json({ error: 'Credenciais inválidas.' });
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(401).json({ error: 'Credenciais inválidas.' });
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
      return res.json({
        user: { id: user.id, name: user.name, email: user.email, role: user.role },
        token
      });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    return res.json({
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      token
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao fazer login.' });
  }
};

export const getMe = async (req: any, res: Response) => {
  try {
    if (isMockMode) {
      const user = mockDb.users.find(u => u.id === req.user.id);
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
      return res.json({ id: user.id, name: user.name, email: user.email, role: user.role, createdAt: user.createdAt });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, name: true, email: true, role: true, createdAt: true }
    });
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
    
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar perfil.' });
  }
};
