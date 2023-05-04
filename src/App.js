import React, { useState } from "react";
//import Funda from "./component/Funda";
import Navbar from "./component/navbar";
import ProductListing from "./component/ProductListing";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";
import { useSelector } from "react-redux";
//import { useSelector } from "react-redux";

function App() {

  return (
    /*<>
      <Navbar/>
      <ProductListing/>
    </>*/

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing />} />

        <Route path={`/product/:productID`} element={<ProductDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
