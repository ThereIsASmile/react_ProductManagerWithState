const Product = require('../models/product.model');
// const Product: the Product model from ProductSchema! the word Schema is not used here, but Product is the same as ProductSchema from product.model.js
// this imports product.model file and it's logic to specified variable

module.exports = {
// export an object with methods for CRUD that affects the Product collection/db

    // CRUD!
    // CREATE
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },
    // READ ALL
    // Mongoose method find()
    getAllProducts: (req, res) => {
        Product.find({})
        // This is an empty object {} that is a query paramater to fetch all documents in the Product collection
            .then(allProducts => {
                console.log(allProducts);
                res.json(allProducts);
            })
            // allProducts must match from .then(allProducts
            // console.log(allProducts)
            // to res.json(allProducts)
            //  When the database query is successful, the method executes the then callback function. It receives an array of allProducts as a parameter. 
            // the console logs the allProducts array for debugging
            // the array is then sent as a JSON response
            .catch(err => {
                console.log("getAllProducts Error!", err)
                res.json(err)
            });
    },
    // READ ONE
    getOneProduct: (req, res) => {
        Product.findById(req.params.id)
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err));
    },
    // UPDATE
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err));
    },
    // DELETE
    deleteProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
 }