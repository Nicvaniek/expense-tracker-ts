import { View, Text, TextInput, StyleSheet } from "react-native";

type BannerBoxProps = {
  title: string;
  children: React.ReactNode;
};

export const BannerBox = ({ title, children }: BannerBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 32,
    paddingVertical: 14,
    width: "80%",
    backgroundColor: "#2a9d8f",
    borderRadius: 8,
  },
  heading: {
    fontSize: 28,
    color: "#e9c46a",
    marginBottom: 12,
  },
});
