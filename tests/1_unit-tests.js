/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

/* global suite test */

const chai = require('chai');

const { assert } = chai;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
  suite('Function convertHandler.getNum(input)', () => {
    test('Whole number input', (done) => {
      const input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test('Decimal Input', (done) => {
      const input = '1.3L';
      assert.equal(convertHandler.getNum(input), 1.3);
      done();
    });

    test('Fractional Input', (done) => {
      const input = '6/3L';
      assert.equal(convertHandler.getNum(input), 2);
      done();
    });

    test('Fractional Input w/ Decimal', (done) => {
      const input = '2.6/1.3L';
      assert.equal(convertHandler.getNum(input), 2);
      done();
    });

    test('Invalid Input (double fraction)', (done) => {
      const input = '1/2/3L';
      assert.isNaN(convertHandler.getNum(input));
      done();
    });

    test('No Numerical Input', (done) => {
      const input = 'L';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite('Function convertHandler.getUnit(input)', () => {
    test('For Each Valid Unit Inputs', (done) => {
      const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
      input.forEach((ele) => {
        assert.isString(convertHandler.getUnit(ele));
      });
      done();
    });

    test('Unknown Unit Input', (done) => {
      const input = '2mgl';
      assert.isNull(convertHandler.getUnit(input));
      done();
    });
  });

  suite('Function convertHandler.getReturnUnit(initUnit)', () => {
    test('For Each Valid Unit Inputs', (done) => {
      const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      const expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite('Function convertHandler.spellOutUnit(unit)', () => {
    test('For Each Valid Unit Inputs', (done) => {
      const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      const expect = ['gallons', 'litres', 'miles', 'kilometres', 'pounds', 'kilograms'];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite('Function convertHandler.convert(num, unit)', () => {
    test('Gal to L', (done) => {
      const input = [5, 'gal'];
      const expected = 18.9271;
      // 0.1 tolerance
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test('L to Gal', (done) => {
      const input = [5, 'l'];
      const expected = 1.3209;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test('Mi to Km', (done) => {
      const input = [5, 'mi'];
      const expected = 8.0467;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test('Km to Mi', (done) => {
      const input = [5, 'km'];
      const expected = 3.1069;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test('Lbs to Kg', (done) => {
      const input = [5, 'lbs'];
      const expected = 2.268;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    test('Kg to Lbs', (done) => {
      const input = [5, 'kg'];
      const expected = 11.0231;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
  });
});
