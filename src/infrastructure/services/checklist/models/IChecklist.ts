import { EChecklistType } from "../enums/EChecklistType";

export interface IChecklist {
  id?: string;
  farmId: string;
  supervisor: string;
  amountMilk: number;
  toUpload?: boolean;
  toUpdate?: boolean;
  toDelete?: boolean;
  type: EChecklistType;
  amountCattle: number;
  createdAt?: string;
  updatedAt?: string;
}
