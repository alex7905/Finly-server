import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all goals for a user
router.get('/', async (req: any, res) => {
  try {
    const goals = await prisma.goal.findMany({
      where: { userId: req.userId },
    });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching goals' });
  }
});

export default router; 