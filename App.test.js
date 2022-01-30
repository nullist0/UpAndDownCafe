import React from 'react';
import { fireEvent, render } from "@testing-library/react-native";
import App from "./App";
import buildDefaultGame from "./up_and_down/default_game/default_game";

describe('default game tests', () => {
    const nextAnswer = () => 500;
    const defaultGame = buildDefaultGame(nextAnswer);

    let guess;
    let hasGuessText;

    beforeEach(() => {
        const { getByTestId } = render(<App game={defaultGame}/>);
        const guessFn = getByTestId => {
            const findInputElement = getByTestId => n => getByTestId(`guess-${n}`)
            const press = findInput => n => fireEvent.press(findInput(n));
            const inputGuess = press => n => n.toString().split('').forEach(press);
            return [findInputElement, press, inputGuess].reduce((val, fn) => fn(val), getByTestId); 
        };
        const hasGuessTextFn = getByTestId => {
            const findGuessTextElement = getByTestId => () => getByTestId('guess-text');
            const getGuessText = findGuessTextElement => () => Number(findGuessTextElement().children[0]);
            const assertGuessText = getGuessText => n => expect(getGuessText()).toBe(n);
            return [findGuessTextElement, getGuessText, assertGuessText].reduce((val, fn) => fn(val), getByTestId); 
        };

        guess = guessFn(getByTestId);
        hasGuessText = hasGuessTextFn(getByTestId);
    });

    test('show inserted guess value', () => {
        const guessValue = Math.floor(Math.random() * 1000);

        guess(guessValue);

        hasGuessText(guessValue);
    });
});