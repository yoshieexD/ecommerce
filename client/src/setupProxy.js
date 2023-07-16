const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://ecommerce-api-yoshieexd.vercel.app',
            changeOrigin: true,
        })
    );
};
