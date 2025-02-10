import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all transactions for a user
router.get('/', async (req: any, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: req.userId },
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions' });
  }
});

export default router; 