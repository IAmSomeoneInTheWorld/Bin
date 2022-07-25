const CAPITALS___LETTERS = require("../providers/providerCaps");
const SMALL___LETTERS = require("../providers/providerSms");
const SYMBOLS = require("../providers/providerSyms");
const NUMBERS = require("../providers/provideNums");

function b2SConverter(word){
    // this is for CAPITALS___LETTERS
    word == CAPITALS___LETTERS.A? word = "A":word;
    word == CAPITALS___LETTERS.B? word = "B":word;
    word == CAPITALS___LETTERS.C? word = "C":word;
    word == CAPITALS___LETTERS.D? word = "D":word;
    word == CAPITALS___LETTERS.E? word = "E":word;
    word == CAPITALS___LETTERS.F? word = "F":word;
    word == CAPITALS___LETTERS.G? word = "G":word;
    word == CAPITALS___LETTERS.H? word = "H":word;
    word == CAPITALS___LETTERS.I? word = "I":word;
    word == CAPITALS___LETTERS.J? word = "J":word;
    word == CAPITALS___LETTERS.K? word = "K":word;
    word == CAPITALS___LETTERS.L? word = "L":word;
    word == CAPITALS___LETTERS.M? word = "M":word;
    word == CAPITALS___LETTERS.N? word = "N":word;
    word == CAPITALS___LETTERS.O? word = "O":word;
    word == CAPITALS___LETTERS.P? word = "P":word;
    word == CAPITALS___LETTERS.Q? word = "Q":word;
    word == CAPITALS___LETTERS.R? word = "R":word;
    word == CAPITALS___LETTERS.S? word = "S":word;
    word == CAPITALS___LETTERS.T? word = "T":word;
    word == CAPITALS___LETTERS.U? word = "U":word;
    word == CAPITALS___LETTERS.V? word = "V":word;
    word == CAPITALS___LETTERS.W? word = "W":word;
    word == CAPITALS___LETTERS.X? word = "X":word;
    word == CAPITALS___LETTERS.Y? word = "Y":word;
    word == CAPITALS___LETTERS.Z? word = "Z":word;
    word == CAPITALS___LETTERS.WS? word = " ":word;

    // this is for SMALL___LETTERS
    word == SMALL___LETTERS.a? word = "a":word;
    word == SMALL___LETTERS.b? word = "b":word;
    word == SMALL___LETTERS.c? word = "c":word;
    word == SMALL___LETTERS.d? word = "d":word;
    word == SMALL___LETTERS.e? word = "e":word;
    word == SMALL___LETTERS.f? word = "f":word;
    word == SMALL___LETTERS.g? word = "g":word;
    word == SMALL___LETTERS.h? word = "h":word;
    word == SMALL___LETTERS.i? word = "i":word;
    word == SMALL___LETTERS.j? word = "j":word;
    word == SMALL___LETTERS.k? word = "k":word;
    word == SMALL___LETTERS.l? word = "l":word;
    word == SMALL___LETTERS.m? word = "m":word;
    word == SMALL___LETTERS.n? word = "n":word;
    word == SMALL___LETTERS.o? word = "o":word;
    word == SMALL___LETTERS.p? word = "p":word;
    word == SMALL___LETTERS.q? word = "q":word;
    word == SMALL___LETTERS.r? word = "r":word;
    word == SMALL___LETTERS.s? word = "s":word;
    word == SMALL___LETTERS.t? word = "t":word;
    word == SMALL___LETTERS.u? word = "u":word;
    word == SMALL___LETTERS.v? word = "v":word;
    word == SMALL___LETTERS.w? word = "w":word;
    word == SMALL___LETTERS.x? word = "x":word;
    word == SMALL___LETTERS.y? word = "y":word;
    word == SMALL___LETTERS.z? word = "z":word;

    // this is for SYMBOLS

    word == SYMBOLS.DOT_OPERATOR? word = ".":word;
    word == SYMBOLS["("]? word = "(":word;
    word == SYMBOLS[")"]? word = ")":word;
    word == SYMBOLS["!"]? word = "!":word;
    word == SYMBOLS["@"]? word = "@":word;
    word == SYMBOLS["#"]? word = "#":word;
    word == SYMBOLS["$"]? word = "$":word;
    word == SYMBOLS["%"]? word = "%":word;
    word == SYMBOLS["~"]? word = "~":word;
    word == SYMBOLS["`"]? word = "`":word;
    word == SYMBOLS["^"]? word = "^":word;
    word == SYMBOLS["&"]? word = "&":word;
    word == SYMBOLS["*"]? word = "*":word;
    word == SYMBOLS["-"]? word = "-":word;
    word == SYMBOLS["_"]? word = "_":word;
    word == SYMBOLS["="]? word = "=":word;
    word == SYMBOLS["+"]? word = "+":word;
    word == SYMBOLS["["]? word = "[":word;
    word == SYMBOLS["]"]? word = "]":word;
    word == SYMBOLS["{"]? word = "{":word;
    word == SYMBOLS["}"]? word = "}":word;
    word == SYMBOLS["|"]? word = "|":word;
    word == SYMBOLS[":"]? word = ":":word;
    word == SYMBOLS[";"]? word = ";":word;
    word == SYMBOLS["'"]? word = "'":word;
    word == SYMBOLS['"']? word = '"':word;
    word == SYMBOLS["<"]? word = "<":word;
    word == SYMBOLS[","]? word = ",":word;
    word == SYMBOLS[">"]? word = ">":word;
    word == SYMBOLS["."]? word = ".":word;
    word == SYMBOLS["?"]? word = "?":word;
    word == SYMBOLS["/"]? word = "/":word;
    word == SYMBOLS["\\"]? word = "\\":word;

    // this is for numbers
    word == NUMBERS["0"] ? word = "0":word;
    word == NUMBERS["1"] ? word = "1":word;
    word == NUMBERS["2"] ? word = "2":word;
    word == NUMBERS["3"] ? word = "3":word;
    word == NUMBERS["4"] ? word = "4":word;
    word == NUMBERS["5"] ? word = "5":word;
    word == NUMBERS["6"] ? word = "6":word;
    word == NUMBERS["7"] ? word = "7":word;
    word == NUMBERS["8"] ? word = "8":word;
    word == NUMBERS["9"] ? word = "9":word;
    return word;
};

module.exports = b2SConverter;