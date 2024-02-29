const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    describe('rounding of a', () => {
        it('should round 15.78 to 18', () => {
            assert.strictEqual(calculateNumber(15.78, 2), 18);
        });

        it('should round 1.2 to 1', () => {
            assert.strictEqual(calculateNumber(1.2, 0), 1);
        });

        it('should round 3.5 to 6', () => {
            assert.strictEqual(calculateNumber(3.5, 2), 6);
        });
    });

    describe('rounding of b', () => {
        it('should round 2 to 18', () => {
            assert.strictEqual(calculateNumber(2, 15.78), 18);
        });

        it('should round 0 to 1', () => {
            assert.strictEqual(calculateNumber(0, 1.2), 1);
        });

        it('should round 2 to 6', () => {
            assert.strictEqual(calculateNumber(2, 3.5), 6);
        });
    });

    describe('summing of a and b', () => {
        it('should sum 15.78 and 2.5 to 19', () => {
            assert.strictEqual(calculateNumber(15.78, 2.5), 19);
        });

        it('should sum 1.2 and 0.2 to 1', () => {
            assert.strictEqual(calculateNumber(1.2, 0.2), 1);
        });

        it('should sum 3.5 and 2.7 to 7', () => {
            assert.strictEqual(calculateNumber(3.5, 2.7), 7);
        });
    });
});
