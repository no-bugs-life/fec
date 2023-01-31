const products = require("../models/products.js");

module.exports = {

    readAll : (req, res)=> {
        console.log(req.query)
        products.listProducts(req.query)
        .then((result)=> {
            res.status(200).send(result.data);
        })
        .catch(err => console.log(err));
    },
    readByID : (req, res) => {
        console.log('params',req.params.product_id)
        const id = req.params.product_id
        products.productInformation(id)
        .then((result)=> {
            res.status(200).send(result.data);
        })
        .catch(err => console.log('err'));
    },
    readAllStyles : (req, res) => {
        const id = req.params.product_id;
        products.productStyles(id)
        .then((result) => {
            res.status(200).send(result.data);
        })
        .catch(err => console.log(err));
    },
    readRelatedProducts : (req, res) => {
        const id = req.params.product_id;
        products.relatedProducts(id)
        .then((result => {
            res.status(200).send(result.data);
        }))
        .catch(err => console.log(err));
    }

};