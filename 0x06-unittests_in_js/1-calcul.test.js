const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return the sum of two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('should return the sum of two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('should return 0 when adding a negative and positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('should return 0 when adding two zeros', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return the difference of two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('should return the difference of two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('should return the correct difference when subtracting a negative and positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('should return 0 when subtracting two zeros', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should return the quotient of two positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('should return 0 when dividing zero by a positive or negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('should return "Error" when dividing a positive or negative number by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
