import React from 'react';
import { fireEvent, render } from "@testing-library/react-native";
import App from "./App";
import buildDefaultGame from "./up_and_down/default_game/default_game";

describe('default game tests', () => {
  const answer = 500;
  const nextAnswer = () => answer;
  const defaultGame = buildDefaultGame(nextAnswer);

  let inputGuess;
  let removeGuess;
  let submitGuess;
  let hasGuessText;
  let hasResultText;

  beforeEach(() => {
    const { getByTestId } = render(<App game={defaultGame}/>);
    const createInputGuessFunction = getByTestId => {
      const findInputGuessElement = getByTestId => n => getByTestId(`guess-${n}`)
      const press = findInput => n => fireEvent.press(findInput(n));
      const inputGuess = press => n => n.toString().split('').forEach(press);
      return [findInputGuessElement, press, inputGuess].reduce((val, fn) => fn(val), getByTestId); 
    };
    const createRemoveGuessFunction = getByTestId => {
      const findRemoveGuessElement = getByTestId => () => getByTestId(`guess-backspace`);
      const press = findElement => () => fireEvent.press(findElement());
      return [findRemoveGuessElement, press].reduce((val, fn) => fn(val), getByTestId);
    };
    const createSubmitGuessFunction = getByTestId => {
      const findSubmitGuessElement = getByTestId => () => getByTestId('guess-submit');
      const press = findElement => () => fireEvent.press(findElement());
      return [findSubmitGuessElement, press].reduce((val, fn) => fn(val), getByTestId);
    };
    const createHasGuessTextFunction = getByTestId => {
      const findGuessTextElement = getByTestId => () => getByTestId('guess-text');
      const getGuessText = findGuessTextElement => () => Number(findGuessTextElement().children[0]);
      const assertGuessText = getGuessText => n => expect(getGuessText()).toBe(n);
      return [findGuessTextElement, getGuessText, assertGuessText].reduce((val, fn) => fn(val), getByTestId); 
    };
    const createHasResultTextFunction = getByTestId => {
      const findResultTextElement = getByTestId => () => getByTestId('guess-result-text');
      const assertResultText = findElement => result => expect(findElement().children[0]).toBe(result);
      return [findResultTextElement, assertResultText].reduce((val, fn) => fn(val), getByTestId);
    };
    inputGuess = createInputGuessFunction(getByTestId);
    removeGuess = createRemoveGuessFunction(getByTestId);
    submitGuess = createSubmitGuessFunction(getByTestId);
    hasGuessText = createHasGuessTextFunction(getByTestId);
    hasResultText = createHasResultTextFunction(getByTestId);
  });

  test('show guessed value', () => {
    // given
    const guessValue = Math.floor(Math.random() * 1000);

    // when
    inputGuess(guessValue);

    // then
    hasGuessText(guessValue);
  });

  test('remove guessed value', () => {
    // given
    const guessValue = Math.floor(Math.random() * 1000);
    const removedGuessValue = Math.floor(guessValue / 10);

    // when
    inputGuess(guessValue);
    removeGuess();

    // then
    hasGuessText(removedGuessValue);
  });

  test('show up if the guessed value is greater than the answer', () => {
    // given
    const guessValue = 600;
    const upText = 'up';
    
    // when
    inputGuess(guessValue);
    submitGuess();
    
    // then
    hasResultText(upText);
  });

  test('show down if the guessed value is less than the answer', () => {
    // given
    const guessValue = 400;
    const downText = 'down';
    
    // when
    inputGuess(guessValue);
    submitGuess();
    
    // then
    hasResultText(downText);
  });

  test('show equal if the guessed value is equal to the answer', () => {
    // given
    const guessValue = answer;
    const equalText = 'equal';
    
    // when
    inputGuess(guessValue);
    submitGuess();
    
    // then
    hasResultText(equalText);
  });
});