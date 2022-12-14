const b2SConverter  = require("./b2sConverter.js");

function b2STranslater(string) {
    string = String(string).trim();
    // removing spaces from the string
    let purestring = string.split(" ");

    let updatetime = 0;
    for(let item of purestring){
        if(updatetime){
            string = string+item;
        }else{
            string = item;
        };

        updatetime = 1;
    };
    
    let error = false
    let returningStr = new String();
    let length = 8;
    let arr = new Array();
    let time = string.length / 8;
    let substr = new String();
    let valueOfJ = 0;
    for (let index = 0; index < time; index++) {
        for (let j = valueOfJ; j < length; j++) {
            if (string[j]) {
                substr += string[j];
            } else {
                console.error('invalid entry');
                error = true;
                break
            }
        }
        arr[index] = substr;
        substr = ""
        valueOfJ += 8
        length += 8;
        if (error == true) {
            returningStr = 'invalid entry';
        } else {
            returningStr += b2SConverter(arr[index]);
        }

    }
    return returningStr;
};

module.exports = b2STranslater;

