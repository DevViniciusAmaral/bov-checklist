import { IFarm } from "./IFarm";
import { AxiosPromise } from "axios";

export interface IFarmService {
  create: (value: IFarm) => Promise<void>;
  read: () => Promise<AxiosPromise<IFarm[]>>;
  update: (id: string, value: IFarm) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
