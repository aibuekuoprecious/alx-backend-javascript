const express = require('express');
const cartRoutes = require('./routes/cart');
const paymentRoutes = require('./routes/payment');
const authRoutes = require('./routes/auth');
const app = express();
const PORT = process.env.PORT || 7865;

// Middleware
app.use(express.json());

// Routes
app.use('/', cartRoutes);
app.use('/', paymentRoutes);
app.use('/', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
