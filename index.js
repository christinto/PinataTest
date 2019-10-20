const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const args = process.argv;

//replace with my own.
// var api_key="489f39e6d084c7e9aa95"
// var secret_api_key="20409837f135ddc426828f86675533fd4e4c06ecb811eaf2f2521590f03bd643"

var api_key="f3fe7aed87b6a9ab0a04"
var secret_api_key="6d24dee903011952b404e3c5c52ce7c2aac63d013c4108835b7158d13b2128f9"


const testAuth = () => {
    const url = `https://api.pinata.cloud/data/testAuthentication`;
    return axios
        .get(url, {
            headers: {
                'pinata_api_key': api_key,
                'pinata_secret_api_key': secret_api_key
            }
        })

};
const pinFileToIPFS = (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    let data = new FormData();

    data.append('file', fs.createReadStream(file));

    return axios.post(url,
        data,
        {
            headers: {
                'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
                'pinata_api_key': api_key,
                'pinata_secret_api_key': secret_api_key
            }
        }
    )
};

testAuth().then(function (result,error) {
    if(error==undefined){
        pinFileToIPFS(args[2]).then(function (response) {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error)

        });
    }

})




