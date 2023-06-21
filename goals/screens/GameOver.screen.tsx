import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

type GameOverScreenProps = {
  onRestart: () => void;
};

export const GameOverScreen = ({ onRestart }: GameOverScreenProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>GAME OVER</Text>
    <PrimaryButton text="Restart" onPress={onRestart} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 72,
    color: "white",
    marginBottom: 42
  },
});
