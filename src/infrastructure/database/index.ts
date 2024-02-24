import { MMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

const mmkv = new MMKV();

export const database: StateStorage = {
  getItem: (key) => mmkv.getString(key),
  removeItem: (key) => mmkv.delete(key),
  setItem: (key, value) => mmkv.set(key, value),
};
