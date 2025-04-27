const reverseString = function(str) {
    let splitString = str.split("");
    let halfWay = Math.floor(splitString.length/2);
    for (let a = 0; a < halfWay; a++) {
        let temp = splitString[a];
        let b = splitString.length-1-a;
        splitString[a] = splitString[b];
        splitString[b] = temp;
    }
    return splitString.join("");
};

// Do not edit below this line
module.exports = reverseString;
