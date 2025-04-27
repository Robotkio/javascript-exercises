const leapYears = function(year) {
    if (!(year%4)) {
        if (!(year%100)) {
            if (!(year%400)) {
                // divisible by 4 and 400
                return true;
            }
            // divisible by 4 and 100 but not 400
            return false;
        }
        // divisible by 4 and not 100
        return true;
    }
    // not divisible by 4
    return false;
};

// Do not edit below this line
module.exports = leapYears;
