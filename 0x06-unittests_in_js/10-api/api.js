const express = require('express');

const app = express();
const PORT = process.env.PORT || 7865;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  const username = userName || '';

  res.send(`Welcome ${username}`);
});

module.exports = app;
