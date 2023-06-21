import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type ButtonProps = {
  text: string;
  style?: ViewStyle,
  textStyle?: TextStyle,
  onPress: () => void;
};

export const PrimaryButton = ({ text, onPress, style, textStyle }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <View>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#264653",
    padding: 12,
    borderRadius: 8
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: 'center'
  },
});
