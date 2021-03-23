import React from "react";

import Footer from "./components/footer";
import Home from "./components/home/Home";
import Nav from "./components/navigation/navigation";
import { Route } from "react-router-dom";
import Shop from "./components/shop-page/shop";

import Product from "./components/shop-page/items";
import Login from "./components/login";
import Signup from "./components/signup/index";
import ProductDetail from "./components/shop-page/product-details";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Home} />
      <Route exact path="/category" component={Shop} />
      <Route exact path="/category/:items" component={Product} />
      <Route
        exact
        path="/category/:items/:productID"
        component={ProductDetail}
      />
      <Route exact path="/product/:productID" component={ProductDetail} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </>
  );
}

export default App;
