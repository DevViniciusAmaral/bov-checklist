import { StackParamList } from "./StackParamList";
import { StackScreenProps } from "@react-navigation/stack";

export type StackRootProps<T extends keyof StackParamList> = StackScreenProps<
  StackParamList,
  T
>;
