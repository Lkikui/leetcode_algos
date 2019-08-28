/**
 * @param {string} J --> chars that are jewels
 * @param {string} S --> all stones that you have
 * @return {number} --> number of stones that are also jewels
 */
var numJewelsInStones = function(J, S) {
    let jSplit = J.split(""); 
    let sSplit = S.split("");
    let stonesAlsoJewels = 0; 
    
    for (let sIdx = 0; sIdx < sSplit.length; sIdx++) { //for every stone
        for (let jIdx = 0; jIdx < jSplit.length; jIdx++) {
           if (sSplit[sIdx] == jSplit[jIdx]) { //compare to every jewel
               stonesAlsoJewels++;
           } 
        }
    }
    
    return stonesAlsoJewels;
};

/* 
    test cases:
    numJewelsInStones("aA", "aAAbbbb"); //output should be 3
    numJewelsInStones("z", "ZZ"); //output should be 0
*/