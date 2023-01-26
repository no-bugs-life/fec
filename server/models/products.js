const axios = require('axios');

const products = {
    listProducts : (options) => {
        return axios.get('/products', options)
    },
    productInformation : (product_id) => {
        return axios.get(`/products/:${product_id})`)
    },
    productStyles : (product_id) => {
        return axios.get(`/products/:${product_id}/styles`)
    },
    relatedProducts : (product_id) => {
        return axios.get(`/products/:${product_id}/related`)
    }
}
module.exports = products;

