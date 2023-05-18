const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
   // create CRM Customer Relationship Manager and a new schema instance with the function mongoose.Schema
   // this is creating a new model named Product

   title: {
       type: String,
       required: [true, "Title is required."],
       minlength: [2, "Title must be at least 2 characters long."],
       maxlength: [255, "Title cannot be more than 255 characters long."]
       //custom validations for the backend
   },
   price: {
       type: Number,
       required: [true, "Price amount is required."],
       minlength: [1, "Price must be at least one number."]
   },
   description: {
       type: String,
       required: [true, "Description is required."],
       minlength: [2, "Description must be at least 2 characters long."]
   }
},
{timestamps: true});


// const Product = mongoose.model('products', ProductSchema);
// module.exports = Product;
// This is the same as writing it below

module.exports = mongoose.model('Product', ProductSchema);