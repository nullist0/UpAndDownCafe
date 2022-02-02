import React, {useState} from 'react';
import {Text} from 'react-native';
import GuessPanel from './GuessPanel';
import GuessResult from './GuessResult';

const useGame = game => {
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState();
  const inputGuess = number => setGuess(guess * 10 + number);
  const removeGuess = () => setGuess(Math.floor(guess / 10));
  const guessAnswer = () => setResult(game.guess(guess));
  return {guess, result, inputGuess, removeGuess, guessAnswer};
};

const Game = ({game = {}}) => {
  const {guess, result, inputGuess, removeGuess, guessAnswer} = useGame(game);
  return (
    <>
      <Text testID="guess-text">{guess}</Text>
      <GuessPanel
        onInputGuess={inputGuess}
        onRemoveGuess={removeGuess}
        onSubmitGuess={guessAnswer}
      />
      <GuessResult {...result} />
    </>
  );
};

export default Game;
