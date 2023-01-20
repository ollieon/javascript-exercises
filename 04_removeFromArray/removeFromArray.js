const removeFromArray = function(array, ...targets) {
    for (let i = 0; i < targets.length; i++) {
        let index = array.findIndex((element) => element === targets[i]);
        if (index === -1) {
            continue;
        }
        array.splice(index, 1);
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
