import { StackParamList } from "../application/routes/StackParamList";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
