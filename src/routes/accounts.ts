import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all accounts for a user
router.get('/', async (req: any, res) => {
  try {
    const accounts = await prisma.account.findMany({
      where: { userId: req.userId },
    });
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching accounts' });
  }
});

export default router; 