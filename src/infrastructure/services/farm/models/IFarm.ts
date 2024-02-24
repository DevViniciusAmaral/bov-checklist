export interface IFarm {
  id?: string;
  name: string;
  farmer: string;
  toUpload?: boolean;
  toUpdate?: boolean;
  toDelete?: boolean;
  checklistsId?: string[];
  createdAt?: string;
  updatedAt?: string;
}
