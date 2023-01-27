const  axios= require('axios');
require("dotenv").config();
axios.defaults.headers.common['Authorization'] =  process.env.GITHUB_KEY
axios.defaults.baseURL = process.env.API_SERVER

const products = {
    listProducts : (options) => {
        return axios.get('/products', options)
    },
    productInformation : (id) => {
        return axios.get(`/products/${id}`)
    },
    productStyles : (product_id) => {
        return axios.get(`/products/${product_id}/styles`)
    },
    relatedProducts : (product_id) => {
        return axios.get(`/products/${product_id}/related`)
    }
}
module.exports = products;

