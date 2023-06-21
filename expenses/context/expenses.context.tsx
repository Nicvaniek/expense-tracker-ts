import React, { useState } from "react";

import { Expense } from "../models/expense";
import { ExpensesContextType } from "../models/expenses-context-type";

export const ExpensesContext = React.createContext<ExpensesContextType>({
  expenses: [],
  addExpense: () => {},
  removeExpense: () => {},
});

type Props = { children: React.ReactNode };

export const ExpensesContextProvider = ({ children }: Props) => {
  const [expenses, setExpenses] = useState<Array<Expense>>([
    {
      id: Math.random(),
      title: "Test expense A",
      amount: 300,
      date: new Date(),
    },
    {
      id: Math.random(),
      title: "Test expense B",
      amount: 250,
      date: new Date(),
    },
    {
      id: Math.random(),
      title: "Test expense C",
      amount: 13,
      date: new Date(),
    },
  ]);

  const addExpense = (e: Expense) => setExpenses((prev) => [...prev, e]);
  const removeExpense = (idToRemove: number) =>
    setExpenses((prev) => prev.filter(({ id }) => id !== idToRemove));

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense, removeExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};
