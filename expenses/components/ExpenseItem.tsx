import { StyleSheet, Text, View } from "react-native";
import { Expense } from "../models/expense";
import { colors } from "../constants/colors";

type Props = {
  expense: Expense;
};

export const ExpenseItem = ({ expense }: Props) => {
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.title}>{expense.title}</Text>
          <Text style={styles.date}>{formatDate(expense.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${expense.amount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6
  },
  innerContainer: {
    backgroundColor: colors.SECONDARY,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8
  },
  amountContainer: {
    backgroundColor: colors.PRIMARY,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8
  },
  title: {
    color: "white",
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18
  },
  date: {
    color: "white",
  },
  amount: {
    color: colors.ACCENT,
    fontSize: 24
  },
});
