const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigBrother;

  beforeEach(() => {
    bigBrother = sinon.spy(console, 'log');
  });

  afterEach(() => {
    bigBrother.restore();
  });

  it('logs "The total is: 120" to the console when sendPaymentRequestToApi(100, 20) is called', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calledWith('The total is: 120')).to.be.true;
    expect(bigBrother.calledOnce).to.be.true;
  });

  it('logs "The total is: 20" to the console when sendPaymentRequestToApi(10, 10) is called', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigBrother.calledWith('The total is: 20')).to.be.true;
    expect(bigBrother.calledOnce).to.be.true;
  });
});
