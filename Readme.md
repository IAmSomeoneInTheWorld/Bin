# Bin

The Bin is a simple node js library to convert string to binary and binary to string.

## Install
```javascript
npm i bin
```

## How to use

import `bin`

```javascript
const bin = require("bin");
```

Convert string into **`Binary`**

```javascript
const binary = bin.binary("hello");

console.log(binary);

// output will be
// 0110100001100101011011000110110001101111
```

Convert binary to **`String`**

```javascript
const string = bin.string("0110100001100101011011000110110001101111");

console.log(binary);

// output will be
// hello
```