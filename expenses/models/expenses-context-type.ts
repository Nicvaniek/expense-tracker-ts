import { Expense } from "./expense";

export interface ExpensesContextType {
  expenses: Array<Expense>;
  addExpense: (e: Expense) => void;
  removeExpense: (id: number) => void;
}
