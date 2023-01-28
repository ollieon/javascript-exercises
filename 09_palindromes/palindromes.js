const palindromes = function (string) {
    // split into array, reverse, then join
    let splitString = string.split(''); // create array
    console.log(splitString);
    
    splitString.reverse(); // reverses array in place
    console.log(splitString);

    let compareString = splitString.join(''); // array to string
    console.log(compareString);

    let a = compareString.toLowerCase().replace(/[\s\W]/g, ''); // delete non alphanumeric
    console.log(a);

    let b = string.toLowerCase().replace(/[\s\W]/g, ''); 
    console.log(b);

    if (a === b) {
        return true;
    } else {
        return false;
    }

    // Another way to do palindromes, decrementing for loop
    // let newString = "";
    // for (i = string.length; i >= 0; i--) {
    //     newString += string[i];
    // }
    
};

// Do not edit below this line
module.exports = palindromes;
