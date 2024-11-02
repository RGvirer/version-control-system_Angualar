// models/user.model.ts
import { Repository } from './repository.model';
import { Version } from './version.model';

export interface User {
  userId: number;
  userName: string;
  email: string;
  createdAt: Date;
  passwordHash: string;
  repositories: Repository[];
  versions: Version[];
}
