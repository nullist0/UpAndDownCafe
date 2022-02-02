import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Game from './components/Game';
import {
  buildDefaultGame,
  fixedRandomAnswer,
} from './up_and_down/default_game/default_game';

const App = ({gameBuilder = () => buildDefaultGame(fixedRandomAnswer())}) => {
  const game = gameBuilder();
  return (
    <SafeAreaView>
      <Game game={game} />
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
