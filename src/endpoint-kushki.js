const axios = require("axios");
require("dotenv").config();

const kushkiAPI = () => {
    let privateMerchantId = "0ac2d961a9d04af99dc7e5f2cf6919ca";

    return axios.create({
        baseURL: "https://api-uat.kushkipagos.com",
        headers: { "Private-Merchant-Id": privateMerchantId },
    });
};

module.exports = kushkiAPI;
