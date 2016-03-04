## WinSys
[![npm version](https://img.shields.io/npm/v/winsys.svg)](https://www.npmjs.com/package/strip_character)
[![NPM downloads](http://img.shields.io/npm/dm/winsys.svg?style=flat)](http://npmjs.org/winsys)

> Gets the windows system information and returns it as an object<br>
> Hopefully this goes without saying, but this only works on windows machines

## Installation
```npm install winsys```

## Usage
```js
var win = require('winsys');
var obj = {};

obj = win();
console.log(obj);
/*=>{ 'Host Name': [ '' ],
      'OS Name': [ 'Microsoft Windows 7 Enterprise' ],
      'OS Version': [ '6.1.7601 Service Pack 1 Build 7601
      'OS Manufacturer': [ 'Microsoft Corporation' ],
      'OS Configuration': [ 'Member Workstation' ],
      'OS Build Type': [ 'Multiprocessor Free' ],
      'Registered Owner': [ '' ],
      'Registered Organization': [ '' ],
      'Product ID': [ '00392-918-5000002-85283' ],
      'Original Install Date': [ '11/10/2014, 3:40:43 PM'
      'System Boot Time': [ '3/1/2016, 3:57:44 PM' ],
      'System Manufacturer': [ 'LENOVO' ],
      'System Model': [ '10A7000BUS' ],
      'System Type': [ 'x64-based PC' ],
      'Processor(s)':
       [ '1 Processor(s) Installed.',
         '[01]:  Intel64 Family 6 Model 60 Stepping 3 Gen
      'BIOS Version': [ 'LENOVO FBKTA1AUS, 10/22/2014' ],
      'Windows Directory': [ 'C:\\Windows' ],
      'System Directory': [ 'C:\\Windows\\system32' ],
      'Boot Device': [ '\\Device\\HarddiskVolume1' ],
      'System Locale': [ 'en-us;English (United States)'
      'Input Locale': [ 'en-us;English (United States)' ]
      'Time Zone': [ '' ],
      'Total Physical Memory': [ '7,986 MB' ],
      'Available Physical Memory': [ '1,843 MB' ],
      'Virtual Memory': [ 'In Use' ],
      'Page File Location(s)': [ 'C:\\pagefile.sys' ],
      Domain: [ '' ],
      'Logon Server': [ '' ],
      'Hotfix(s)':
       [ '358 Hotfix(s) Installed.',
         '[01]:  KB2849697',
          ...],
      'Network Card(s)':
       [ '1 NIC(s) Installed.',
         '[01]:  Intel(R) Ethernet Connection I217-LM' ],
      'Connection Name': [ 'Local Area Connection' ],
      'DHCP Enabled': [ 'Yes' ],
      'DHCP Server': [ '00.00.00.000' ],
      'IP address(es)': [ '[01]:  00.00.00.000', '' ] }
*/
```

## License
MIT © [Alex Brelsford](abrelsfo.github.io)
