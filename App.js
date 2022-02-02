import React from 'react';
import {SafeAreaView} from 'react-native';
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

export default App;
