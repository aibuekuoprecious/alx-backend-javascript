const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber() with type SUM', () => {
    it('should add 5 and 10', () => {
        assert.strictEqual(calculateNumber('SUM', 5, 10), 15);
    });
    it('should add 2 and 2.7', () => {
        assert.strictEqual(calculateNumber('SUM', 2, 2.7), 5);
    });
    it('should add 1.0 and 4.0', () => {
        assert.strictEqual(calculateNumber('SUM', 1.0, 4.0), 5);
    });
    it('should add 1.7 and 3.5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.7, 3.5), 6);
    });
    it('should return 0 when adding 0.1 and 0.3', () => {
        assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
    });
    it('should add -0.7 and 0.7', () => {
        assert.strictEqual(calculateNumber('SUM', -0.7, 0.7), 0);
    });
    it('should add -0.8 and -0.7', () => {
        assert.strictEqual(calculateNumber('SUM', -0.8, -0.7), -2);
    });
});

describe('#calculateNumber() with type SUBTRACT', () => {
    it('should subtract 1 and 3', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should subtract 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should subtract 1.2 and 3.7', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it('should subtract 1.5 and 3.7', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('should subtract 0.1 and 0.3', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
    });
    it('should subtract -0.7 and 0.7', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -0.7, 0.7), -2);
    });
    it('should subtract -0.8 and -0.7', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -0.8, -0.7), 0);
    });
    it('should subtract 0.8 and -0.4', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 0.8, -0.4), 1);
    });
});

describe('#calculateNumber() with type DIVIDE', () => {
    it('should divide 1 and 4', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
    });
    it('should divide 1 and 3.7', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });
    it('should divide 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should divide 1.6 and 2.4', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.6, 2.4), 1);
    });
    it('should divide 4.2 and 1.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4.2, 1.5), 2);
    });
    it("should return 'Error' when dividing 1.3 and 0.3", () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.3, 0.3), 'Error');
    });
    it('should divide -0.7 and 0.7', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -0.7, 0.7), -1);
    });
    it('should divide -0.8 and -0.7', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -0.8, -0.7), 1);
    });
    it('should divide -44.5 and 2.4', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -44.5, 2.4), -22);
    });
    it('should divide -88.5 and -3.6', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -88.5, -3.6), 22);
    });
});
