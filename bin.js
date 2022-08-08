const lib = {
    string : require("./lib/BtoS/b2sTranslater"),
    binary : require("./lib/StoB/translate").binaryTranslator,
    gap : require("./lib/StoB/translate").gap
};

module.exports = lib;