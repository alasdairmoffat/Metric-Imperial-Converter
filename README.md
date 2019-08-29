# Metric Imperial Converter

> FreeCodeCamp Metric Imperial Converter challenge.

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://badges.mit-license.org)
[![Build Status](https://travis-ci.com/alasdairmoffat/Metric-Imperial-Converter.svg?branch=master)](https://travis-ci.com/alasdairmoffat/Metric-Imperial-Converter)
[![codecov](https://codecov.io/gh/alasdairmoffat/Metric-Imperial-Converter/branch/master/graph/badge.svg)](https://codecov.io/gh/alasdairmoffat/Metric-Imperial-Converter)

## Table of Contents

- [Preview](#preview)
- [General Info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [License](#license)

## Preview

[Glitch](https://alasdairmoffat-metric-imperial-converter.glitch.me)

## General Info

Project built to fulfill the following User Stories:

1. I will help prevent the client from trying to guess(sniff) the MIME type.
2. I will prevent cross-site scripting (XSS) attacks.
3. I can **GET** `/api/convert` with a single parameter containing an accepted number and unit and have it converted.</I>
4. Hint: Split the input by looking for the index of the first character.
5. I can convert 'gal' to 'L' and vice versa. **(1 gal to 3.78541 L)**</I>
6. I can convert 'lbs' to 'kg' and vice versa. **(1 lbs to 0.453592 kg)**</I>
7. I can convert 'mi' to 'km' and vice versa. **(1 mi to 1.60934 km)**</I>
8. If my unit of measurement is invalid, returned will be 'invalid unit'.
9. If my number is invalid, returned with will 'invalid number'.
10. If both are invalid, return will be 'invalid number and unit'.
11. I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
12. My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format `{initNum} {initial_Units} converts to {returnNum} {return_Units}` with the result rounded to 5 decimals.</My>
13. All 16 unit tests are complete and passing.
14. All 5 functional tests are complete and passing.

### Example usage

- /api/convert?input=4gal
- /api/convert?input=1/2km
- /api/convert?input=5.4/3lbs
- /api/convert?input=kg

### Example return

```json
{
  "initNum": 3.1,
  "initUnit": "mi",
  "returnNum": 5.0000008,
  "returnUnit": "km",
  "string": "3.1 miles converts to 5.00002 kilometers"
}
```

## Technologies

- Node.js version: 10.15
- Express version: 4.17
- Chai version: 4.2
- Mocha version: 6.2
- Helmet version: 3.20

## Setup

### Clone

Clone from repository

```bash
git clone https://github.com/alasdairmoffat/Metric-Imperial-Converter.git
```

### Installation

```bash
cd Metric-Imperial-Converter
npm install
npm start
```

## License

> **[MIT license](https://opensource.org/licenses/mit-license.php)**
