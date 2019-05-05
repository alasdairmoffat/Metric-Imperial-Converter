/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

const { expect } = require('chai');
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = (app) => {
  const convertHandler = new ConvertHandler();

  function round(number, places) {
    return +`${Math.round(`${number}e+${places}`)}e-${places}`;
  }

  app.route('/api/convert').get((req, res) => {
    const { input } = req.query;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const toString = convertHandler.getString(
      round(initNum, 5),
      initUnit,
      round(returnNum, 5),
      returnUnit,
    );

    // invalid number will result in falsy initNum
    // invalid unit will result in falsy initUnit
    if (!initNum && !initUnit) {
      res.send('invalid number and unit');
      return;
    }
    if (!initNum) {
      res.send('invalid number');
      return;
    }
    if (!initUnit) {
      res.send('invalid unit');
      return;
    }

    res.json({
      initNum: round(initNum, 5),
      initUnit,
      returnNum: round(returnNum, 5),
      returnUnit,
      string: toString,
    });
  });
};
