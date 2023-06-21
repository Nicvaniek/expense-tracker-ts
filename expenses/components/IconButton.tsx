import { Pressable, StyleSheet, ViewStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  onPress: () => void;
  iconName: string;
  color: string;
  style: ViewStyle;
};

export const IconButton = ({ onPress, iconName, color, style }: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({ pressed }) => (pressed ? [styles.pressed, style] : style)}
    >
      <Ionicons name={iconName as any} size={32} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
