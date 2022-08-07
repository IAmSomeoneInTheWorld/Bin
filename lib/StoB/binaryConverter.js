const CAPITALS___LETTERS = require("../providers/providerCaps");
const SMALL___LETTERS = require("../providers/providerSms");
const SYMBOLS = require("../providers/providerSyms");
const NUMBERS = require("../providers/provideNums");

function binaryConverter(word){
    word = String(word)
    // this is for CAPITALS___LETTERS
    word == "A"?word = CAPITALS___LETTERS.A:word;
    word == "B"?word = CAPITALS___LETTERS.B:word;
    word == "C"?word = CAPITALS___LETTERS.C:word;
    word == "D"?word = CAPITALS___LETTERS.D:word;
    word == "E"?word = CAPITALS___LETTERS.E:word;
    word == "F"?word = CAPITALS___LETTERS.F:word;
    word == "G"?word = CAPITALS___LETTERS.G:word;
    word == "H"?word = CAPITALS___LETTERS.H:word;
    word == "I"?word = CAPITALS___LETTERS.I:word;
    word == "J"?word = CAPITALS___LETTERS.J:word;
    word == "K"?word = CAPITALS___LETTERS.K:word;
    word == "L"?word = CAPITALS___LETTERS.L:word;
    word == "M"?word = CAPITALS___LETTERS.M:word;
    word == "N"?word = CAPITALS___LETTERS.N:word;
    word == "O"?word = CAPITALS___LETTERS.O:word;
    word == "P"?word = CAPITALS___LETTERS.P:word;
    word == "Q"?word = CAPITALS___LETTERS.Q:word;
    word == "R"?word = CAPITALS___LETTERS.R:word;
    word == "S"?word = CAPITALS___LETTERS.S:word;
    word == "T"?word = CAPITALS___LETTERS.T:word;
    word == "U"?word = CAPITALS___LETTERS.U:word;
    word == "V"?word = CAPITALS___LETTERS.V:word;
    word == "W"?word = CAPITALS___LETTERS.W:word;
    word == "X"?word = CAPITALS___LETTERS.X:word;
    word == "Y"?word = CAPITALS___LETTERS.Y:word;
    word == "Z"?word = CAPITALS___LETTERS.Z:word;
    word == " "?word = CAPITALS___LETTERS.WS:word;
    
    // this is for SMALL___LETTERS
    word == "a"?word = SMALL___LETTERS.a:word;
    word == "b"?word = SMALL___LETTERS.b:word;
    word == "c"?word = SMALL___LETTERS.c:word;
    word == "d"?word = SMALL___LETTERS.d:word;
    word == "e"?word = SMALL___LETTERS.e:word;
    word == "f"?word = SMALL___LETTERS.f:word;
    word == "g"?word = SMALL___LETTERS.g:word;
    word == "h"?word = SMALL___LETTERS.h:word;
    word == "i"?word = SMALL___LETTERS.i:word;
    word == "j"?word = SMALL___LETTERS.j:word;
    word == "k"?word = SMALL___LETTERS.k:word;
    word == "l"?word = SMALL___LETTERS.l:word;
    word == "m"?word = SMALL___LETTERS.m:word;
    word == "n"?word = SMALL___LETTERS.n:word;
    word == "o"?word = SMALL___LETTERS.o:word;
    word == "p"?word = SMALL___LETTERS.p:word;
    word == "q"?word = SMALL___LETTERS.q:word;
    word == "r"?word = SMALL___LETTERS.r:word;
    word == "s"?word = SMALL___LETTERS.s:word;
    word == "t"?word = SMALL___LETTERS.t:word;
    word == "u"?word = SMALL___LETTERS.u:word;
    word == "v"?word = SMALL___LETTERS.v:word;
    word == "w"?word = SMALL___LETTERS.w:word;
    word == "x"?word = SMALL___LETTERS.x:word;
    word == "y"?word = SMALL___LETTERS.y:word;
    word == "z"?word = SMALL___LETTERS.z:word;

    // this is for SYMBOLS
    word == "."?word = SYMBOLS.DOT_OPERATOR:word;
    word == "("?word = SYMBOLS["("]:word;
    word == ")"?word = SYMBOLS[")"]:word;
    word == "@"?word = SYMBOLS["@"]:word;
    word == "#"?word = SYMBOLS["#"]:word;
    word == "%"?word = SYMBOLS["%"]:word;
    word == "!"?word = SYMBOLS["!"]:word;
    word == "$"?word = SYMBOLS["$"]:word;
    word == "^"?word = SYMBOLS["^"]:word;
    word == "&"?word = SYMBOLS["&"]:word;
    word == "*"?word = SYMBOLS["*"]:word;
    word == "_"?word = SYMBOLS["_"]:word;
    word == "-"?word = SYMBOLS["-"]:word;
    word == "="?word = SYMBOLS["="]:word;
    word == "+"?word = SYMBOLS["+"]:word;
    word == "["?word = SYMBOLS["["]:word;
    word == "]"?word = SYMBOLS["]"]:word;
    word == "{"?word = SYMBOLS["{"]:word;
    word == "}"?word = SYMBOLS["}"]:word;
    word == "|"?word = SYMBOLS["|"]:word;
    word == ":"?word = SYMBOLS[":"]:word;
    word == ";"?word = SYMBOLS[";"]:word;
    word == "'"?word = SYMBOLS["'"]:word;
    word == '"'?word = SYMBOLS['"']:word;
    word == "<"?word = SYMBOLS["<"]:word;
    word == ","?word = SYMBOLS[","]:word;
    word == ">"?word = SYMBOLS[">"]:word;
    word == "."?word = SYMBOLS["."]:word;
    word == "?"?word = SYMBOLS["?"]:word;
    word == "/"?word = SYMBOLS["/"]:word;
    word == "`"?word = SYMBOLS["`"]:word;
    word == "~"?word = SYMBOLS["~"]:word;
    word == "\\"?word = SYMBOLS["\\"]:word;
    word == "\n"?word = SYMBOLS["\n"]:word;

    // this is for numbers
    word == "0"?word = NUMBERS["0"]:word;
    word == "1"?word = NUMBERS["1"]:word;
    word == "2"?word = NUMBERS["2"]:word;
    word == "3"?word = NUMBERS["3"]:word;
    word == "4"?word = NUMBERS["4"]:word;
    word == "5"?word = NUMBERS["5"]:word;
    word == "6"?word = NUMBERS["6"]:word;
    word == "7"?word = NUMBERS["7"]:word;
    word == "8"?word = NUMBERS["8"]:word;
    word == "9"?word = NUMBERS["9"]:word;
    return word;
}

module.exports = binaryConverter;