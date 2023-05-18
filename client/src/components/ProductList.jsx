import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {

    // const {removeFromDom, product, setProduct} = props;
    const {product, setProduct} = props;
    // curly brackets make this an object?
    // destructured props passed 

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product/get")
        // This needs to match the the axios route to call the getAllProducts function
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data);
            // setProduct updates the state with the getAllProducts
        })
        .catch((err)=>{
            console.log(err);
    	})
	}, []);

    
    return (
        <div className="col-md-6 offset-3 bg-success text-light rounded p-2">
            <h2>Plant Products:</h2>
        {
            product.map((product, index) => {
            // product data is mapped to render each product by product._id
            return <div key={index}>
            <p className="fs-4 mt-4">
                    <Link to={`/${product._id}`} className="link-light"> {product.title} </Link>
                </p>
                {/* <p>
                    <Link to={"/edit/" + product._id}>Edit Product</Link>
                </p>   */}
                {/* <button className="btn btn-dark mt-3" onClick={(e)=>{deleteProduct(product._id)}}>Delete Item</button> */}


        </div>
            })
        }
        </div>
    )
}
export default ProductList;



{/* <div>
{product.map((product)=>{
    return ( 
        <div key={product._id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>

    )})
}
</div> */}


    // the square brackets make it an array that state can iterate through
    // const navigate = useNavigate();
    // navigates or redirects after delete method is ran  