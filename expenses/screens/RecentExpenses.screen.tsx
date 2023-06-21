import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../context/expenses.context";
import { ExpensesTotal } from "../components/ExpensesTotal";
import { ExpenseItem } from "../components/ExpenseItem";

export const RecentExpensesScreen = () => {
  const { expenses } = useContext(ExpensesContext);

  const [recent, setRecent] = useState(expenses);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const recentExpenses = expenses.slice(expenses.length - 3, expenses.length);
    const newTotal = recentExpenses.reduce(
      (accumulator, expense) => accumulator + expense.amount,
      0
    );
    setTotal(newTotal);
    setRecent(recentExpenses);
  }, [expenses]);

  return (
    <View style={styles.container}>
      <ExpensesTotal title="Last 7 days" total={total} />
      <FlatList
        data={recent}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    paddingTop: 20,
  },
});
