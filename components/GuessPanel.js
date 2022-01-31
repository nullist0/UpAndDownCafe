import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GuessPanelButton = ({ number = 0, onPress = () => {} }) => {
  return (
    <TouchableOpacity 
        testID={`guess-${number}`} 
        onPress={onPress}>
        <Text>{number}</Text>
    </TouchableOpacity>
  );
};

const GuessRemoveButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity
      testID='guess-backspace'
      onPress={onPress}>
      <Icon name='backspace-outline' size={10}/>
    </TouchableOpacity>
  );
};

const GuessSubmitButton = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity
      testID='guess-submit'
      onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  );
};

const GuessPanel = ({ onInputGuess = number => {}, onRemoveGuess = () => {}, onSubmitGuess = () => {} }) => {
  const createGuessPanelButton = i => <GuessPanelButton key={i} number={i} onPress={() => onInputGuess(i)}/>;
  return (
    <>
      {[...Array(10).keys()].map(createGuessPanelButton)}
      <GuessRemoveButton onPress={onRemoveGuess}/>
      <GuessSubmitButton onPress={onSubmitGuess}/>
    </>
  );
};

export default GuessPanel;