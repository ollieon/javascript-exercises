const fibonacci = function(index) {
    const sequence = [1, 1];
    
    if (index < 0) {
        return "OOPS";
    }
    if (index == 1) {
        return sequence[0];
    }
    if (index == 2) {
        return sequence[1];
    }

    for (let i = 2; i < index; i++) {
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    return sequence[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
