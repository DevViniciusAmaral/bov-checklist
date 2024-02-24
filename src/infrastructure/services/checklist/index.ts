import { api } from "../../api";
import { IChecklistService } from "./models/IChecklistService";

export const checklistService: IChecklistService = {
  create: (value) => api.post(`/checklists`, value),
  read: () => api.get(`/checklists`),
  update: (id, value) => api.put(`/checklists/${id}`, value),
  delete: (id) => api.delete(`/checklists/${id}`),
};
