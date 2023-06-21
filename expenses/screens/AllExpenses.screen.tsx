import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../context/expenses.context";
import { ExpenseItem } from "../components/ExpenseItem";
import { ExpensesTotal } from "../components/ExpensesTotal";

export const AllExpensesScreen = () => {
  const { expenses } = useContext(ExpensesContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = expenses.reduce(
      (accumulator, expense) => accumulator + expense.amount,
      0
    );
    setTotal(newTotal);
  }, [expenses]);

  return (
    <View style={styles.container}>
      <ExpensesTotal title="Total" total={total} />
      <FlatList
        data={expenses}
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
    paddingTop: 20
  },
});
