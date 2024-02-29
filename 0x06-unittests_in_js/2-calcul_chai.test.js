const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('#calculateNumber() with type SUM', () => {
    it('should add 5 and 10', () => {
        expect(calculateNumber('SUM', 5, 10)).to.equal(15);
    });
    it('should add 2 and 2.7', () => {
        expect(calculateNumber('SUM', 2, 2.7)).to.equal(5);
    });
    it('should add 1.0 and 4.0', () => {
        expect(calculateNumber('SUM', 1.0, 4.0)).to.equal(5);
    });
    it('should add 1.7 and 3.5', () => {
        expect(calculateNumber('SUM', 1.7, 3.5)).to.equal(6);
    });
    it('should return 0 when adding 0.1 and 0.3', () => {
        expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
    });
    it('should add -0.7 and 0.7', () => {
        expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);
    });
    it('should add -0.8 and -0.7', () => {
        expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
    });
});

describe('#calculateNumber() with type SUBTRACT', () => {
    it('should subtract 1 and 3', () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should subtract 1.4 and 4.5', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should subtract 1.2 and 3.7', () => {
        expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
    it('should subtract 1.5 and 3.7', () => {
        expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
    it('should subtract 0.1 and 0.3', () => {
        expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);
    });
    it('should subtract -0.7 and 0.7', () => {
        expect(calculateNumber('SUBTRACT', -0.7, 0.7)).to.equal(-2);
    });
    it('should subtract -0.8 and -0.7', () => {
        expect(calculateNumber('SUBTRACT', -0.8, -0.7)).to.equal(0);
    });
    it('should subtract 0.8 and -0.4', () => {
        expect(calculateNumber('SUBTRACT', 0.8, -0.4)).to.equal(1);
    });
});

describe('#calculateNumber() with type DIVIDE', () => {
    it('should divide 1 and 4', () => {
        expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
    });
    it('should divide 1 and 3.7', () => {
        expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });
    it('should divide 1.4 and 4.5', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should divide 1.6 and 2.4', () => {
        expect(calculateNumber('DIVIDE', 1.6, 2.4)).to.equal(1);
    });
    it('should divide 4.2 and 1.5', () => {
        expect(calculateNumber('DIVIDE', 4.2, 1.5)).to.equal(2);
    });
    it("should return 'Error' when dividing 1.3 and 0.3", () => {
        expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');
    });
    it('should divide -0.7 and 0.7', () => {
        expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);
    });
    it('should divide -0.8 and -0.7', () => {
        expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
    });
    it('should divide -44.5 and 2.4', () => {
        expect(calculateNumber('DIVIDE', -44.5, 2.4)).to.equal(-22);
    });
    it('should divide -88.5 and -3.6', () => {
        expect(calculateNumber('DIVIDE', -88.5, -3.6)).to.equal(22);
    });
});
