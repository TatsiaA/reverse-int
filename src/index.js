module.exports = function reverse (n) {
    if (n >= 0) {
    let str = String(n);
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;

    } else {
        n = - n;
        return reverse(n);
    }
    
}
