const sumAll = function(a, b) {
    if (!(Number.isInteger(a) &&  Number.isInteger(b) && a > 0 && b > 0)) {
        return "ERROR";
    }

    // formula n(n+1)/2 sums 1 to n
    // n: nighest number - lowest number
    // offsetTotal: (lowest number - 1) * n

    let n = (a>b ? a-b : b-a) + 1;
    let offsetTotal = ((a<b ? a : b) - 1) * n;

    return (n*(n+1)/2) + offsetTotal;
};

// Do not edit below this line
module.exports = sumAll;
