import React from 'react';
import {Text} from 'react-native';

const GuessResult = ({result = undefined}) => {
  if (!result) return null;
  return <Text testID="guess-result-text">{result}</Text>;
};

export default GuessResult;
