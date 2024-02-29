const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let bigBrother;
  let dummy;

  beforeEach(() => {
    bigBrother = sinon.spy(console);
    dummy = sinon.stub(Utils, 'calculateNumber');
    dummy.returns(10);
  });

  afterEach(() => {
    dummy.restore();
    bigBrother.log.restore();
  });

  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrother.log.callCount).to.be.equal(1);
  });
});
