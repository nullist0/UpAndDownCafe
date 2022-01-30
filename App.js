import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [guess, setGuess] = useState(0);
  return (
    <SafeAreaView>
      <Text testID='guess-text'>{guess}</Text>
      {
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => 
      <TouchableOpacity key={i} testID={`guess-${i}`} onPress={() => setGuess(guess * 10 + i)}>
        <Text>i</Text>
      </TouchableOpacity>
      )
      }
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
