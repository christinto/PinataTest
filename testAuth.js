const axios = require('axios');

const Auth = () => {
    const url = `https://api.pinata.cloud/data/testAuthentication`;
    return axios
        .get(url, {
            headers: {
                'pinata_api_key': "your pinata api key",
                'pinata_secret_api_key': "your pinata secret api key"
            }
        })

};