import { FlatList, StyleSheet, Text, View } from "react-native";
import { Title } from "../components/Title";
import { BannerBox } from "../components/BannerBox";
import { PrimaryButton } from "../components/PrimaryButton";
import { HistoricalGuess } from "../components/HistoricalGuess";

type GameScreenProps = {
  cpuGuess?: number;
  history: number[];
  onHigher: () => void;
  onLower: () => void;
};

export const GameScreen = ({
  cpuGuess,
  history,
  onHigher,
  onLower,
}: GameScreenProps) => (
  <View style={styles.container}>
    <Title text="Opponent's Guess" />
    <View style={styles.guessContainer}>
      <Text style={styles.guessText}>{cpuGuess}</Text>
    </View>
    <BannerBox title="Higher or lower?">
      <View style={styles.btnContainer}>
        <PrimaryButton
          textStyle={styles.btnText}
          style={styles.button}
          text="-"
          onPress={onLower}
        />
        <PrimaryButton
          textStyle={styles.btnText}
          style={styles.button}
          text="+"
          onPress={onHigher}
        />
      </View>
    </BannerBox>
    <FlatList
      style={styles.historyList}
      data={history}
      renderItem={({ item, index }) => (
        <HistoricalGuess index={index} guess={item} />
      )}
      keyExtractor={(item) => item.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 42,
  },
  guessContainer: {
    marginTop: 24,
    width: "60%",
    borderWidth: 4,
    padding: 18,
    borderColor: "#e76f51",
    borderRadius: 8,
    backgroundColor: "#e76f51",
    alignItems: "center",

    // elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  guessText: {
    fontSize: 62,
    color: "#e9c46a",
  },
  btnContainer: {
    marginTop: 18,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  button: {
    width: "48%",
  },
  btnText: {
    fontSize: 28,
  },
  historyList: {
    width: '100%',
    paddingHorizontal: 12,
    paddingTop: 24
  },
});
