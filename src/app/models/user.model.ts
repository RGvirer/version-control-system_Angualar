// models/user.model.ts
import { Repository } from './repository.model';

export interface User {
  userId: number;
  userName: string;
  email: string;
  createdAt: Date;
  passwordHash: string;
  repositories: Repository[];
}
