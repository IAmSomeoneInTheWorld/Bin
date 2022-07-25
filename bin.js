module.exports = {
    string : require("./lib/BtoS/b2sTranslater"),
    binary : require("./lib/StoB/translate")
};

const b=require("./lib/StoB/translate")
console.log(b('hello'))