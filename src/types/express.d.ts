import { User } from '@prisma/client';

declare global {
  namespace Express {
    interface User {
      id: string;
      email: string;
      fullName: string;
    }
  }
} 