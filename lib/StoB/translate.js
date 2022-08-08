const binaryConverter = require("./binaryConverter.js");
const {range} = require('go-loop');

function binaryTranslator(string , spaces=false){
    let convertedStr = new String();
    for(let i = 0; i<string.length;i++){
        if(spaces){
            convertedStr+=binaryConverter(string[i])+" ";
        }else{
            convertedStr+=binaryConverter(string[i]).trim();
        }
    }
    return convertedStr.trim();
};

let gap = (string , skip=8 , symbol=" ")=>{
    let str = "";
    let count = 0;
    range(string , (v)=>{
        if(count === skip){
            str+=symbol+v;
            count = 0;
        }else{
            str+=v;
        }
        count++;
    });
    return str.trim();
};

// replace(/\GAP|\s/g,'');

module.exports =  {gap , binaryTranslator};


