import { NavigatorScreenParams } from "@react-navigation/native";
import { TabParamList } from "./tab-param-list";
import { Expense } from "./expense";

export type StackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  ManagementModal: { expense?: Expense };
};
