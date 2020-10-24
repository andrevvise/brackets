module.exports = function check(str, bracketsConfig) {
    const finalArray = [];
    const brackets = Object.fromEntries(bracketsConfig);

    for (let bracket of str.split('')) {
        if (finalArray[0] === bracket) {
            finalArray.shift();
        } else if (brackets[bracket]) {
            finalArray.unshift(brackets[bracket]);
        } else {
            return false;
        }
    }
    return finalArray.length === 0;
}
