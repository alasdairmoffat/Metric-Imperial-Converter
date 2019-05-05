/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.units = {
    gal: { fullname: 'gallons', convertsTo: 'l' },
    l: { fullname: 'litres', convertsTo: 'gal' },
    lbs: { fullname: 'pounds', convertsTo: 'kg' },
    kg: { fullname: 'kilograms', convertsTo: 'lbs' },
    mi: { fullname: 'miles', convertsTo: 'km' },
    km: { fullname: 'kilometres', convertsTo: 'mi' },
  };

  this.getNum = (input) => {
    const index = input.search(/[^\d./]/);
    // if no number provided default to 1
    const number = index > 0 ? input.slice(0, index) : 1;
    const fractionIndex = input.search('/');

    const result = fractionIndex < 0
      ? Number(number)
      : Number(number.slice(0, fractionIndex)) / Number(number.slice(fractionIndex + 1));
    return result;
  };

  this.getUnit = (input) => {
    const index = input.search(/[^\d./]/);
    const unit = input.slice(index).toLowerCase();
    const result = Object.keys(this.units).includes(unit) ? unit : null;
    return result;
  };

  this.getReturnUnit = (initUnit) => {
    if (!initUnit) return null;
    const result = this.units[initUnit].convertsTo;
    return result;
  };

  this.spellOutUnit = (unit) => {
    if (!unit) return null;
    const result = this.units[unit].fullname;
    return result;
  };

  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const conversionFactor = {
      gal: galToL,
      l: 1 / galToL,
      lbs: lbsToKg,
      kg: 1 / lbsToKg,
      mi: miToKm,
      km: 1 / miToKm,
    };

    const result = initNum * conversionFactor[initUnit];
    return result;
  };

  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    const result = `${initNum} ${this.spellOutUnit(
      initUnit,
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

    return result;
  };
}

module.exports = ConvertHandler;
