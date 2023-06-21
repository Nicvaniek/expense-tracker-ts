import { View, Text, StyleSheet } from "react-native";
import { Title } from "../components/Title";
import { NumberSelector } from "../components/NumberSelector";

type StartScreenProps = {
  onConfirmNumber: (e: number) => void;
};

export const StartScreen = ({ onConfirmNumber }: StartScreenProps) => {
  return (
    <View style={styles.container}>
      <Title text="Guess My Number" />
      <NumberSelector onConfirm={onConfirmNumber} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 42,
  },
});
