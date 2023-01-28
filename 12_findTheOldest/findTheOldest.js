const findTheOldest = function(people) {
    people.forEach(element => {
        if (element.yearOfDeath == null || element.yearOfDeath == undefined) {
            let year = new Date().getFullYear();
            element.lifespan = year - element.yearOfBirth;
        } else {
        element.lifespan = element.yearOfDeath - element.yearOfBirth;
        };
    })

    const oldest = people.reduce((older, element) => {
        if (element.lifespan > older.lifespan) {
            return element;
        }
        return older;
    });

    return oldest;

    
};

// Do not edit below this line
module.exports = findTheOldest;
