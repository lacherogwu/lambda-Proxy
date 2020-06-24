const { proxy } = require('./proxy');

exports.handler = async ({ body }) => {
    
    const proxyRes = await proxy(body);

    const response = {
        statusCode: proxyRes.status,
        body: JSON.stringify(proxyRes.data),
    };
    return response;
};