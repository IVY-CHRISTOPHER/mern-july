/* eslint-disable no-undef */
const Product = require('../models/product.model');

module.exports.index = (req,res) => {
    res.json({
        message: 'Index Page, please use api/products for all products.'
    });
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json(allProducts)
        })
        .catch((err) => {
            res.json({message: "Something went wrong getting all products", error: err})
        });
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct)
        })
        .catch(err => {
            res.json({message: 'Something went wrong creating a new Product', error: err})
        });
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}