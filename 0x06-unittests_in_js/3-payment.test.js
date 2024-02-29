const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let bigBrother;

  beforeEach(() => {
    bigBrother = sinon.spy(Utils);
  });

  afterEach(() => {
    bigBrother.calculateNumber.restore();
  });

  it('should use the calculateNumber method of Utils', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
  });
});
