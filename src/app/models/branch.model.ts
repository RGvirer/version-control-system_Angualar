export interface Branch {
    branchId: number;
    repositoryId: number;
    name: string;
    isMain: boolean;
    createdAt: string; // או Date, תלוי איך אתה רוצה לנהל את התאריך
}