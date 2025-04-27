const removeFromArray = function(arr) {
    if (!Array.isArray(arr)) {
        return "Error, first argument not an array.";
    }
    if (arguments.length == 1) {
        return arr;
    }

    // delete values that match arguments
    for (let a = 1; a < arguments.length; a++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arguments[a]) {
                delete arr[i];
            }
        }
    }

    // remove undefined holes created by delete
    for (let i = arr.length-1; i >= 0; i--) {
        if (typeof arr[i] === "undefined") {
            arr.copyWithin(i, i+1);
            arr.pop();
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
