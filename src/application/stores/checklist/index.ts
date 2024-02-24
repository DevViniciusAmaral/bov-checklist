import { create } from "zustand";
import { database } from "@/infrastructure/database";
import { persist, createJSONStorage } from "zustand/middleware";
import { IChecklist } from "@/infrastructure/services/checklist/models/IChecklist";

interface IChecklistStore {
  checklists: IChecklist[];
  create: (value: IChecklist) => void;
  read: () => IChecklist[];
  update: (id: string, value: IChecklist) => void;
  delete: (id: string) => void;
  deleteAll: () => void;
}

export const useChecklistStore = create<IChecklistStore>()(
  persist(
    (set, get) => ({
      checklists: [],
      create: (value: IChecklist) =>
        set({ checklists: [...get().checklists, value] }),
      read: () => get().checklists,
      update: (id: string, value: IChecklist) =>
        set({
          checklists: get().checklists.map((checklist) =>
            checklist.id === id ? { ...checklist, ...value } : checklist
          ),
        }),
      delete: (id: string) =>
        set({
          checklists: get().checklists.filter(
            (checklist) => checklist.id !== id
          ),
        }),
      deleteAll: () => set({ checklists: [] }),
    }),
    {
      name: "checklists",
      storage: createJSONStorage(() => database),
    }
  )
);
