import buildDefaultGame from "./default_game";
import Result from "./game_result";

const answer = 500;
const nextAnswer = () => answer;
let defaultGame;

beforeEach(() => {
    defaultGame = buildDefaultGame(nextAnswer);
});

test('default game returns up when the guess is greater than the answer', () => {
    // given
    const guess = 600;
    const up = Result.up;

    // when
    const result = defaultGame.guess(guess);

    // then
    expect(result).toEqual(up);
});

test('default game returns down when the guess is less than the answer', () => {
    // given
    const guess = 400;
    const down = Result.down;

    // when
    const result = defaultGame.guess(guess);

    // then
    expect(result).toEqual(down);
});

test('default game returns equal when the guess is equal to the answer', () => {
    // given
    const guess = 500;
    const equal = Result.equal;

    // when
    const result = defaultGame.guess(guess);

    // then
    expect(result).toEqual(equal);
});