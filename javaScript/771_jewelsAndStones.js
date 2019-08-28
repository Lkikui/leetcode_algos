/**
 * @param {string} J --> chars that are jewels
 * @param {string} S --> all stones that you have
 * @return {number} --> number of stones that are also jewels
 */

/* ========================
    first solution attempt
    run time: 60ms
=========================== */

// var numJewelsInStones = function(J, S) {
//     let jSplit = J.split(""); 
//     let sSplit = S.split("");
//     let stonesAlsoJewels = 0; 
    
//     for (let sIdx = 0; sIdx < sSplit.length; sIdx++) { //for every stone
//         for (let jIdx = 0; jIdx < jSplit.length; jIdx++) {
//            if (sSplit[sIdx] == jSplit[jIdx]) { //compare to every jewel
//                stonesAlsoJewels++;
//            } 
//         }
//     }
    
//     return stonesAlsoJewels;
// };

/* ========================
    optimized solution
    run time: 44 ms
=========================== */

var numJewelsInStones = function(J, S) {
    var stonesAlsoJewels = 0;
    
    // iterate every character in S
    for (var i = 0; i < S.length; i++) {
        // determine if any chars in J are present
        if (J.includes(S[i])) {
            stonesAlsoJewels++;
        }
    }
    
    return stonesAlsoJewels;
}


/* 
    test cases:
    numJewelsInStones("aA", "aAAbbbb"); //output should be 3
    numJewelsInStones("z", "ZZ"); //output should be 0
*/