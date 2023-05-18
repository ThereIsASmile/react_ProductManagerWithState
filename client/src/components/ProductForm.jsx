import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ProductForm = (props) => {
   const {product, setProduct} = props;
   //keep track of what is being typed via useState hook


   const [title, setTitle] = useState("");
   const [price, setPrice] = useState("");
   const [description, setDescription] = useState("");


   //handler when the form is submitted
   const onSubmitHandler = (e) => {
       //prevent default behavior of the submit
       e.preventDefault();
       //make a post request to create a new person
       axios.post('http://localhost:8000/', {
           title,   
           //shortcut syntax for title: title
           price,     
           //shortcut syntax for price: price
           description
           //shortcut syntax for description: description
       })
           .then(res => {
               console.log("THIS IS RESPONSE", res);
               // track data
               console.log("THIS IS RESPONSE.DATA",res.data);
               //update the lifted state of product array to include the current value in state plus the single object created and returned from our post request
               //new product is added, the setter will update the value in state
               setProduct([...product, res.data]);
           })
           .catch(err => console.log(err))
   }


   return (
       <div className="row">
           <form className="col-md-6 offset-3 mt-4 bg-success text-light rounded p-2" onSubmit={onSubmitHandler}>
           <h2>New Plant:</h2>
               <div className="form-group">
                   <label htmlFor="title">Plant Title:</label><br/>
                   {/* When the user types in this input, our onChange synthetic event
                       runs this arrow function, setting that event's target's (input)
                       value (what's typed into the input) to our updated state   */}
                   <input type="text" name="title" id="title" className="form-control" onChange = {(e)=>setTitle(e.target.value)}/>
               </div>
               <div className="form-group">
                   <label htmlFor="price">Price:</label><br/>
                   <input type="number" name="price" id="price" className="form-control" onChange = {(e)=>setPrice(e.target.value)}/>
               </div>
               <div className="form-group">
                       <label htmlFor="description">Description:</label><br/>
                       <input type="text" name="description" id="description" className="form-control" onChange = {(e)=>setDescription(e.target.value)}/>
               </div>
               <button className="btn btn-warning mt-3">Add Plant</button>
           </form>
       </div>
   )
}


export default ProductForm;
