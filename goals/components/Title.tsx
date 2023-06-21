import { StyleSheet, View, Text } from "react-native";

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'white',
    padding: 12,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 32
  },
});
