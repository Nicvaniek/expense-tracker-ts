import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  onPress: () => void;
  iconName: string;
  color: string;
};

export const IconButton = ({ onPress, iconName, color }: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <Ionicons name={iconName as any} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
