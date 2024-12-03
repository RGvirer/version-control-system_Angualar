import { Branch } from './branch.model';

export interface Repository {
    repositoryId: number;
    name: string;
    createdAt: string; // או Date, תלוי איך אתה רוצה לנהל את התאריך
    description: string;
    userId: number;
    branches: Branch[];
}
