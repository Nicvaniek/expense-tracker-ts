import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StartScreen } from "./screens/Start.screen";
import { GameScreen } from "./screens/Game.screen";
import { GameOverScreen } from "./screens/GameOver.screen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [cpuGuess, setCpuGuess] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const generateGuess = (min: number, max: number): number => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === cpuGuess) {
      return generateGuess(min, max);
    } else {
      return rndNum;
    }
  };

  useEffect(() => {
    if (userNumber) {
      const guess = generateGuess(1, 100);
      setCpuGuess(guess);
      setHistory((prev) => [...prev, guess]);
    }
  }, [userNumber]);

  useEffect(() => {
    setIsGameOver(cpuGuess === userNumber);
  }, [cpuGuess]);

  const handleHigher = () => {
    const higherGuesses = history.filter((x) => x > cpuGuess);

    const highestGuess = higherGuesses.length
      ? Math.min(...higherGuesses)
      : 100;

    const guess = generateGuess(cpuGuess, highestGuess);

    setCpuGuess(guess);
    setHistory((prev) => [...prev, guess]);
  };

  const handleLower = () => {
    const lowerGuesses = history.filter((x) => x < cpuGuess);
    const lowestGuess = lowerGuesses.length ? Math.max(...lowerGuesses) : 0;

    const guess = generateGuess(lowestGuess, cpuGuess);

    setCpuGuess(guess);
    setHistory((prev) => [...prev, guess]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!userNumber && <StartScreen onConfirmNumber={setUserNumber} />}
      {userNumber && !isGameOver && (
        <GameScreen
          cpuGuess={cpuGuess}
          history={history}
          onHigher={handleHigher}
          onLower={handleLower}
        />
      )}
      {isGameOver && (
        <GameOverScreen onRestart={() => setUserNumber(undefined)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4a261",
  },
});
