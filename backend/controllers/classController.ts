import { Request, Response } from 'express';
import { prisma } from '../prismaClient.js';

export const getClasses = async (req: Request, res: Response) => {
  try {
    const classes = await prisma.class.findMany({
      orderBy: { createdAt: 'asc' }
    });
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aulas.' });
  }
};

export const createClass = async (req: Request, res: Response) => {
  try {
    const { title, description, level, videoUrl, duration } = req.body;

    const newClass = await prisma.class.create({
      data: {
        title,
        description,
        level,
        videoUrl,
        duration: parseInt(duration) || 0
      }
    });

    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aula.' });
  }
};
