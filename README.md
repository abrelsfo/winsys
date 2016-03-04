## WinSys

<br>
[![npm version](https://img.shields.io/npm/v/winsys.svg)](https://www.npmjs.com/package/strip_character)
[![Build Status](https://travis-ci.org/dawsonbotsford/winsys.svg?branch=master)](https://travis-ci.org/abrelsfo/winsys.svg?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/winsys.svg?style=flat)](http://npmjs.org/winsys)

<br>
> Gets the windows system information and returns it as an object<br>
> Hopefully this goes without saying, but this only works on windows machines

<br>
## Installation
```npm install winsys```

<br>
## Usage
```js
var win = require('winsys');
var obj = {};

obj = win();
console.log(obj);
//=>{windows system information}
```

<br>
## License
MIT © [Alex Brelsford](abrelsfo.github.io)
