import Result from './game_result';

function buildDefaultGame(nextAnswer) {
  const guess = guess => {
    const answer = nextAnswer();
    console.log(answer);
    if (answer < guess) {
      return Result.up;
    } else if (answer > guess) {
      return Result.down;
    } else {
      return Result.equal;
    }
  };

  return {
    guess,
  };
}

function fixedRandomAnswer(power = 3) {
  const answer = Math.floor(Math.random() * 10 ** power);
  return () => answer;
}

export {buildDefaultGame, fixedRandomAnswer};
