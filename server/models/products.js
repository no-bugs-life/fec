const axios = require('axios');
require("dotenv").config();

axios.defaults.headers.common['Authorization'] = process.env.GITHUB_KEY
axios.defaults.baseURL = process.env.API_SERVER

module.exports = {
    listProducts : (options) => {
        return axios.get('/products', options)
    },
    productInformation : (product_id) => {
        return axios.get(`/products/${product_id}`)
    },
    productStyles : (product_id) => {
        return axios.get(`/products/${product_id}/styles`)
    },
    relatedProducts : (product_id) => {
        return axios.get(`/products/${product_id}/related`)
    }
};

