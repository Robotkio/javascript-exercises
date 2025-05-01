const findTheOldest = function(people) {

    let currentYear = new Date().getFullYear();
    let oldestPerson = null;
    let oldestAge = 0;

    for (let person of people) {
        let latestYearAlive = ("yearOfDeath" in person) ? person.yearOfDeath : currentYear;
        let currentPersonsAge = latestYearAlive - person.yearOfBirth;

        if (currentPersonsAge > oldestAge) {
            oldestAge = currentPersonsAge;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
