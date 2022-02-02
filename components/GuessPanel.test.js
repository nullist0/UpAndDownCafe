import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import GuessPanel from './GuessPanel';

test('GuessPanel should call onInputGuess function for all numbers from 0 to 9', () => {
  // given
  const onInputGuess = jest.fn();
  const {getByTestId} = render(<GuessPanel onInputGuess={onInputGuess} />);

  // when
  for (let number = 0; number < 10; number++) {
    const panelButton = getByTestId(`guess-${number}`);
    fireEvent.press(panelButton);
  }

  // then
  for (let number = 0; number < 10; number++) {
    expect(onInputGuess).toHaveBeenCalledWith(number);
  }
});

test('GuessPanel should call onRemoveGuess function if guess-backspace button is pressed', () => {
  // given
  const onRemoveGuess = jest.fn();
  const {getByTestId} = render(<GuessPanel onRemoveGuess={onRemoveGuess} />);
  const removeButton = getByTestId('guess-backspace');

  // when
  fireEvent.press(removeButton);

  // then
  expect(onRemoveGuess).toHaveBeenCalled();
});

test('GuessPanel should call onSumbitGuess function if guess-submit button is pressed', () => {
  // given
  const onSubmitGuess = jest.fn();
  const {getByTestId} = render(<GuessPanel onSubmitGuess={onSubmitGuess} />);
  const submitButton = getByTestId('guess-submit');

  // when
  fireEvent.press(submitButton);

  // then
  expect(onSubmitGuess).toHaveBeenCalled();
});
