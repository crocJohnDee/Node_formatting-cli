exports.trim = str => str.trim().replace(/\s+/g, ' ');
exports.capitalizeInitial = str => {
    const low = str.toLowerCase();
    const rest = low.slice(1);
    const high = low[0].toUpperCase();
    return high + rest;
}


// also in formatting.js write a new function called capitalizeInitial. This function should take a string as a parameter, and return it with only the first letter capitalized.

// Example output:

// 'europe' => 'Europe'
// 'BERLIN' => 'Berlin'
// 'aSIa' => 'Asia'