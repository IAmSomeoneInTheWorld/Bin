const binaryConverter = require("./binaryConverter.js");

// this function used to convert string to binary
function binaryTranslator(string){
    let convertedStr = new String();
    for(let i = 0; i<string.length;i++){
        convertedStr+=binaryConverter(string[i]).trim();
    }
    return convertedStr;
};

module.exports =  binaryTranslator;


