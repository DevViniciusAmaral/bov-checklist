import uuid from "react-native-uuid";
import { checklistService } from "@/infrastructure/services/checklist";
import { IChecklist } from "@/infrastructure/services/checklist/models/IChecklist";

// HOOKS
import { useNetInfo } from "@react-native-community/netinfo";
import { useChecklistStore } from "@/application/stores/checklist";

export const useChecklist = () => {
  const store = useChecklistStore();
  const { isConnected } = useNetInfo();

  const createChecklist = async (value: IChecklist) => {
    try {
      const id = uuid.v4() as string;
      const checklist = { id, ...value, createdAt: new Date().toString() };

      if (isConnected) await checklistService.create(checklist);
      else checklist.toUpload = true;

      store.create(checklist);
    } catch (error) {
      console.log(error);
    }
  };

  const syncDeletedChecklists = async () => {
    try {
      const toDeleteChecklists = store.checklists.filter(
        (checklist) => checklist.toDelete
      );
      if (toDeleteChecklists.length === 0) return;

      const local = toDeleteChecklists.filter(
        (checklist) => checklist.toUpload
      );
      if (local.length > 0) local.forEach(({ id }) => store.delete(id));

      const online = toDeleteChecklists.filter(
        (checklist) => !checklist.toUpload
      );
      await Promise.allSettled(
        online.map(({ id }) => checklistService.delete(id))
      );
    } catch (error) {
      console.log("Error SynDeletedChecklists =>", error);
    }
  };

  const syncUploadedChecklists = async () => {
    try {
      const toUploadChecklists = store.checklists.filter(
        (checklist) => checklist.toUpload
      );
      if (toUploadChecklists.length === 0) return;

      await Promise.allSettled(
        toUploadChecklists.map(({ toDelete, toUpdate, toUpload, ...rest }) => {
          return checklistService.create({ ...rest });
        })
      );
    } catch (error) {
      console.log("Error syncUploadedChecklists =>", error);
    }
  };

  const syncUpdatedChecklists = async () => {
    try {
      const toUpdateChecklists = store.checklists.filter(
        (checklist) => checklist.toUpdate
      );
      if (toUpdateChecklists.length === 0) return;

      await Promise.allSettled(
        toUpdateChecklists.map(
          ({ toDelete, toUpdate, toUpload, id, ...rest }) => {
            return checklistService.update(id, { id, ...rest });
          }
        )
      );
    } catch (error) {
      console.log("Error syncUploadedChecklists =>", error);
    }
  };

  const syncChecklists = async () => {
    try {
      await syncDeletedChecklists();
      console.log("SYNC DELETED");
      await syncUploadedChecklists();
      console.log("SYNC UPLOADED");
      await syncUpdatedChecklists();
      console.log("SYNC UPDATED");

      const { data: checklists } = await checklistService.read();
      console.log("CHECKLISTS =>", JSON.stringify(checklists, null, 2));

      store.deleteAll();
      console.log("SORE DELETE ALL");
      checklists.forEach((checklist) => store.create(checklist));
      console.log("SORE FOR EACH");
    } catch (error) {
      console.log(error);
    }
  };

  const updateChecklist = async (id: string, value: IChecklist) => {
    try {
      const checklist = store.checklists.find(
        (checklist) => checklist.id === id
      );

      const updatedChecklist = {
        ...checklist,
        ...value,
        updatedAt: new Date().toString(),
      };

      if (isConnected) await checklistService.update(id, updatedChecklist);
      else updatedChecklist.toUpdate = true;

      store.update(id, updatedChecklist);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteChecklist = async (id: string) => {
    try {
      const checklist = store.checklists.find(
        (checklist) => checklist.id === id
      );

      if (isConnected) {
        await checklistService.delete(id);
        store.delete(id);
      } else store.update(id, { ...checklist, toDelete: true });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    checklists: store.checklists,
    createChecklist,
    syncChecklists,
    updateChecklist,
    deleteChecklist,
  };
};
