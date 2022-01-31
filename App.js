import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GuessPanel from './components/GuessPanel';
import buildDefaultGame from './up_and_down/default_game/default_game';

const GuessResult = ({ result = undefined }) => {
  if(!result) return null;
  return (
    <Text testID='guess-result-text'>{result}</Text>
  )
};

const App = ({ game = buildDefaultGame((() => {
  const answer = Math.floor(Math.random() * 1000);
  return () => answer;
})()) }) => {
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState();
  return (
    <SafeAreaView>
      <Text testID='guess-text'>{guess}</Text>
      <GuessPanel 
        onInputGuess={number => setGuess(guess * 10 + number)}
        onRemoveGuess={() => setGuess(Math.floor(guess / 10))}
        onSubmitGuess={() => setResult(game.guess(guess))}/>
      <GuessResult {...result} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
