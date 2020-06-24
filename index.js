const { proxy } = require('./proxy');

exports.handler = async ({ body }) => {
    
    const proxyRes = await proxy(body);

    const response = {
        statusCode: proxyRes.status,
        headers: {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST'
        },
        body: JSON.stringify(proxyRes.data),
    };
    return response;
};