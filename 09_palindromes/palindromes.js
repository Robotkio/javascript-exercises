const palindromes = function (str) {
    let arr = str.split("")
        .filter((char) => ![",", ".", " ", "!"].includes(char))
        .map((char) => char.toLowerCase())
    return arr.join("") == arr.toReversed().join("");
};

// Do not edit below this line
module.exports = palindromes;
