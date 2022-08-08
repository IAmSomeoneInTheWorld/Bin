const provider = require('../../providers/s2b');

const binaryConverter = (word)=>{
    if(word in provider){
        return provider[word];
    };

    return word;
};

module.exports = binaryConverter;
