function Result(result) {
    this.result = result;
}

Result.up = new Result('up');
Result.down = new Result('down');
Result.equal = new Result('equal');

export default Result;