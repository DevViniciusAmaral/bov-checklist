import { AxiosPromise } from "axios";
import { IChecklist } from "./IChecklist";

export interface IChecklistService {
  create: (value: IChecklist) => Promise<void>;
  read: () => Promise<AxiosPromise<IChecklist[]>>;
  update: (id: string, value: IChecklist) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
