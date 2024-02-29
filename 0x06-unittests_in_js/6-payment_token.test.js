const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response from the API when success is true', async () => {
    const res = await getPaymentTokenFromAPI(true);
    expect(res).to.deep.equal({ data: 'Successful response from the API' });
  });
});
