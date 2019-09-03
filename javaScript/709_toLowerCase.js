/**
 * @param {string} str
 * @return {string}
 */

/* ===================================================
    solution attempt without built-in methods
    run time: 52 ms
===================================================== */
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

/* ===================================================
    solution attempt using built-in methods
    run time: 44 ms
===================================================== */
var toLowerCase = function(str) {
    for (var i = 0; i < str.length; i++) {
        // check if current character is a capital letter
        if (/[A-Z]/.test(str.charAt(i))) {
            str = str.replace(str.charAt(i), str.charAt(i).toLowerCase());
        }
    }
    return str;
};