import Result from "./game_result";

function buildDefaultGame(nextAnswer) {
    const guess = guess => {
        const answer = nextAnswer();
        if (answer < guess) {
            return Result.up;
        }
        else if (answer > guess) {
            return Result.down;
        }
        else {
            return Result.equal;
        }
    };
    
    return {
        guess
    };
}

export default buildDefaultGame;