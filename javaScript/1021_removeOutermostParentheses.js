/**
 * @param {string} S
 * @return {string}
 */

/* ===========================
    first solution attempt
    runtime: 56 ms
=========================== */

var removeOuterParentheses = function(S) {
    var newStr = "";
    var openCount = 0;
    var closeCount = 0;
    
    for (var i = 0; i < S.length; i++) {
        if (S.charAt(i) == "(") openCount++;
        else if (S.charAt(i) == ")") closeCount++;
        
        if (i == 0 || openCount == 1 && closeCount == 0) {
            continue;
        } else if (openCount == closeCount) {
            openCount = 0;
            closeCount = 0;
        } else {
            newStr += S.charAt(i);
        }
    }
    
    return newStr;
};