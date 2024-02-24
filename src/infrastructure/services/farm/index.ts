import { api } from "@/infrastructure/api";
import { IFarmService } from "./models/IFarmService";

export const farmService: IFarmService = {
  create: (value) => api.post(`/farms`, value),
  read: () => api.get(`/farms`),
  update: (id, value) => api.put(`/farms/${id}`, value),
  delete: (id) => api.delete(`/farms/${id}`),
};
