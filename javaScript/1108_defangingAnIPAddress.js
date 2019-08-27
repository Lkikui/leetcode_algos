/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // split string into array at the dots
    let splitAddress = address.split("."); //[1,1,1,1]
    
    // convert array into string with separator [.]
    address = splitAddress.join("[.]"); // "1[.]1[.]1[.]1"
    
    return address;
};

