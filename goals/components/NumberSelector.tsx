import { StyleSheet, Text, TextInput, View } from "react-native";
import { PrimaryButton } from "./PrimaryButton";
import { useState } from "react";
import { BannerBox } from "./BannerBox";

type NumberSelectorProps = {
  onConfirm: (e: number) => void;
};

export const NumberSelector = ({ onConfirm }: NumberSelectorProps) => {
  const [value, setValue] = useState<number>();

  const handleConfirm = () => {
    if (value) {
      onConfirm(value);
    }
  };

  return (
    <BannerBox title="Enter a Number">
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={(e) => setValue(Number(e))}
      />
      <View style={styles.btnContainer}>
        <PrimaryButton style={styles.button} text="Reset" onPress={() => {}} />
        <PrimaryButton
          style={styles.button}
          text="Confirm"
          onPress={handleConfirm}
        />
      </View>
    </BannerBox>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "30%",
    textAlign: "center",
    fontSize: 32,
    color: "#e9c46a",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#e9c46a",
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 4,
    marginTop: 32,
  },
  button: {
    width: "45%",
  },
});
