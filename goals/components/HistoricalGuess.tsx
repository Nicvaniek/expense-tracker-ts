import { StyleSheet, Text, View } from "react-native";

type Props = {
  index: number;
  guess: number;
};

export const HistoricalGuess = ({ index, guess }: Props) => (
  <View style={styles.container}>
    <Text>#{index + 1}</Text>
    <Text>Opponent's guess: {guess}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e76f51",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,

    // elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});
