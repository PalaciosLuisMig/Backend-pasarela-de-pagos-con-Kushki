const axios = require("axios");
require("dotenv").config();

const kushkiAPI = () => {
    let privateMerchantId = process.env.PRIVATE_MERCHANT_ID;

    return axios.create({
        baseURL: "https://api-uat.kushkipagos.com",
        headers: { "Private-Merchant-Id": privateMerchantId },
    });
};

module.exports = kushkiAPI;
