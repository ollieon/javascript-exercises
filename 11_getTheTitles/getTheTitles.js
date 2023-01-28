const getTheTitles = function(object) {
    const titleArray = object.map((element) => element.title); // didn't like braces around the call, because it wants to put it in an object
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
