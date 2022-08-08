const b2s = require('../../providers/b2s');

function b2SConverter(word) {
    if(word in b2s){
        return b2s[word];
    };

    return word;
};

module.exports = b2SConverter;