/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        // check if current character is a capital letter
        if (/[A-Z]/.test(str.charAt(i))) {
            var currentCharCode = str.charCodeAt(i) //get unicode number
            newStr += String.fromCharCode(currentCharCode + 32) //capital code + 32 => lowercase code
        } else {
            newStr += str.charAt(i)
        }
    }

    return newStr;
};