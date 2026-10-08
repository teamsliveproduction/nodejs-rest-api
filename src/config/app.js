module.exports = {
  port: process.env.PORT || 3000,
  apiPrefix: '/api',
  cors: {
    origin: /http:\/\/(127(\.\d){3}|localhost)/,
  },
};
