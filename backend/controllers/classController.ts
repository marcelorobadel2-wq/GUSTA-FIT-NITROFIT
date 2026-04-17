import { Request, Response } from 'express';
import { prisma } from '../prismaClient.js';
import { isMockMode, mockDb } from '../mockState.js';

export const getClasses = async (req: Request, res: Response) => {
  try {
    if (isMockMode) {
      return res.json(mockDb.classes);
    }

    const classes = await prisma.class.findMany({
      orderBy: { createdAt: 'asc' }
    });
    return res.json(classes);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar aulas.' });
  }
};

export const createClass = async (req: Request, res: Response) => {
  try {
    const { title, description, level, videoUrl, duration } = req.body;

    if (isMockMode) {
      const newClass = {
        id: `class-${Date.now()}`,
        title,
        description,
        level,
        videoUrl,
        duration: parseInt(duration) || 0,
        createdAt: new Date()
      };
      mockDb.classes.push(newClass);
      return res.status(201).json(newClass);
    }

    const newClass = await prisma.class.create({
      data: {
        title,
        description,
        level,
        videoUrl,
        duration: parseInt(duration) || 0
      }
    });
    return res.status(201).json(newClass);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar aula.' });
  }
};
