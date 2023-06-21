import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../constants/colors";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  type?: "PRIMARY" | "SECONDARY" | "ACCENT";
  onPress: () => void;
};

export const Button = ({
  children,
  style,
  type = "ACCENT",
  onPress,
}: Props) => {
  const btnStyle: ViewStyle = {
    backgroundColor: colors[type],
  };
  return (
    <View style={[styles.container, btnStyle, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.pressableContainer]
            : styles.pressableContainer
        }
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 8
  },
  pressableContainer: {
    width: '100%',
    alignItems: 'center'
  },
  innerContainer: { padding: 8 },
  pressed: {
    opacity: 0.4,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
