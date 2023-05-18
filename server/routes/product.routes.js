// App will crash if the route does not have a matching function in the controller file! eg: createProduct, getAllProducts, getOneProduct, updateProduct,deleteProduct

const ProductController = require('../controllers/product.controller');
// imports the controller 

module.exports = (app) => {
    // app is needed in the parantheses because it matches in the server.js as the server object!
    app.post('/api/product/create', ProductController.createProduct);
    app.get('/api/product/get', ProductController.getAllProducts);
    // can be the same route when the HTTP verbs are different
    app.get('/api/product/get/:id', ProductController.getOneProduct);
    app.patch('/api/product/edit/:id', ProductController.updateProduct);
    app.delete('api/product/delete/:id', ProductController.deleteProduct); 
}
// These routes match the Axios call! These routes are for the API they do not match with the path for components to follow. This is just for the backend! DO not use these to view frontend page!

// this function includes: HTTP verb get, request route, and what the api is to do when that route is hit.
// SO saying Person.Controller.index is like saying to the route look in the person controller and find the value that goes along with the index.
// Now execute that value... making it a function.