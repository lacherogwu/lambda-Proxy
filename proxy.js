
const axios = require('axios');

exports.proxy = async data => {
    try {
        return await axios(data);
    } catch (err) {
        return err.response;
    }
};