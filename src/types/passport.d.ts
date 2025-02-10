import { User } from '@prisma/client';

declare global {
  namespace Express {
    // Tell Passport to use our Prisma User type
    interface User extends User {}
  }
} 