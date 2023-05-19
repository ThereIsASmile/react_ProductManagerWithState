import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
// import { Link } from 'react-router-dom';
const Main = () => {
    
    const [product, setProduct] = useState([]);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId)); 
        // Could be placed anywhere needed
    }

    return (
        <div>

        
    	{/* ProductForm and Product List can both utilize the getter and setter established in their parent component: */}
           <ProductForm product={product} setProduct={setProduct} />
            <hr/>
           <ProductList removeFromDom={removeFromDom} product={product} setProduct={setProduct} />
           {/* props is being passed for product and removeFromDom to the corresponding components. product is a const/variable in product list and {product} is the javascript value passing through*/}
        </div>
    )
}
export default Main;