# Bin

The Bin is a simple node js library to convert string to binary and binary to string.

## How to use

import `bin`

```javascript
const bin = require("@keepcoding/bin");
```

Convert string into **`Binary`**

```javascript
// for space between every byte
const gap = true;

const binary = bin.binary("hello" , gap);

console.log(binary);

// output will be
// 01101000 01100101 01101100 01101100 01101111
```

Convert binary to **`String`**

```javascript
const string = bin.string("0110100001100101011011000110110001101111");

console.log(binary);

// output will be
// hello
```

Prettify your **`Binary`**
```javascript
const text = "Hello World";
/* 
    skip used to decide how many skips will be there,
    deafult value of skip is 8
*/
const skip = 8;
/*
    symbol decides which symbol will be used between,
    default value of symbol is " "
*/
const symbol = " ";
let binary = bin.gap(text , skip , symbol);

/*
    Output
    "01001000 01100101 01101100 01101100 01101111 00100000 
    01010111 01101111 01110010 01101100 01100100"
*/
```