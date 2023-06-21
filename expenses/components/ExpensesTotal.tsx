import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type Props = {
  title: string;
  total: number;
};

export const ExpensesTotal = ({ title, total }: Props) => (
  <View style={styles.padded}>
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>${total}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  padded: { padding: 6 },
  container: {
    backgroundColor: colors.ACCENT,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 8,
  },
  text: {
    color: colors.PRIMARY,
    fontSize: 24,
  },
});
