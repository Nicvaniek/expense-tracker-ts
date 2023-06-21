import { StyleSheet, Text, View } from "react-native";

type Props = {};

export const Template = ({}: Props) => (
  <View style={styles.container}>
    <Text>Hello there</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});
