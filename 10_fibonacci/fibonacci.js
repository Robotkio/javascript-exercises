const fibonacci = function(digit) {
    if (digit < 0) { return "OOPS"; }
    if (digit == 0) { return 0; }

    let prev = 0;
    let curr = 1;

    for (let i=1; i<digit; i++) {
        [prev, curr] = [curr, prev + curr];
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
