import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link} from "react-router-dom";


const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/get/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);


    return (
        <div className="col-md-6 offset-3 bg-success text-light rounded p-2">
            <Link to="/">Home</Link>
            <ul className="list-group">
                <li className="list-group-item h4 mb-0">{product.title}</li>
                <li className="list-group-item">Price: ${product.price}</li>
                <li className="list-group-item">{product.description}</li>
            </ul>
            
        </div>
    );
}
export default Detail;
