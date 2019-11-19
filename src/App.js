import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ProductsList from "./components/ProductsList";
import ProductDescription from "./components/ProductDescription";
import Header from "./components/Header";
import ProductsCategory from "./components/ProductsCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/femme/*" component={ProductsCategory} />
        <Route exact path="/" component={ProductsList} />
        <Route path="/product/:productId" component={ProductDescription} />
      </BrowserRouter>
    </div>
  );
}

export default App;
