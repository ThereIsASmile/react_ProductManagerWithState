// import logo from './logo.svg';
// import './App.css';

// import React, { useEffect }  from 'react';
// import axios from 'axios';

// import ProductForm from './components/ProductForm';
// import ProductList from './components/ProductList';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {

  return (
    <div className="App">

{/* These are the routes for front end! */}

        <BrowserRouter>
          <Routes>
            <Route element={<Main/>} path="/" default />
            <Route element={<Detail/>} path="/:id"/>
            <Route element={<Update/>} path="/edit/:id"/> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
