import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from './components/Shop/Shop/Shop';
import TopHeader from './components/Shared/TopHeader/TopHeader';
import Footer from './components/Shared/Footer/Footer';
import Error from './components/Error/Error';
import ProductDetails from './components/ProductDetails/ProductDetails';
import PdAll from './components/Shop/Category/PdAll';
import PdFrutis from './components/Shop/Category/PdFrutis';
import PdFish from './components/Shop/Category/PdFish';
import PdFastfood from './components/Shop/Category/PdFastfood';
import { addToDatabaseCart } from './utilities/databaseManager';
import Review from './components/Review/Review/Review';
export const HandleAddProduct = createContext();
export const Cart = createContext();
export const SeveCart = createContext();
export const ToggleCart = createContext();

function App() {

  // golobal hooks share for all components.
  const [cart, setCart] = useState([]);
  const [seveCart, setSeveCart] = useState([]);
  // const [toggleAddCart, setToggleAddCart] = useState(false);

  // product add to cart for golobal components.
  const handleAddProduct = (products) => {
    const smaeProduct = cart.find(pd => pd.key === products.key);
    let count = 1;
    let newCart;
    if (smaeProduct) {
      count = smaeProduct.quantityCount + 1;
      smaeProduct.quantityCount = count;
      const others = cart.filter(pd => pd.key !== products.key);
      newCart = [...others, smaeProduct];
    }
    else {
      products.quantityCount = 1;
      newCart = [...cart, products];
    }
    setCart(newCart);
    addToDatabaseCart(products.key, count);
  };

  return (
    <HandleAddProduct.Provider value={handleAddProduct}>
      <SeveCart.Provider value={[seveCart, setSeveCart]}>
        <Cart.Provider value={[cart, setCart]}>

          <Router>
            <TopHeader />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/shop">
                <Shop cart={cart} />
              </Route>
              <Route path="/review">
                <Review />
              </Route>
              <Route path="/product/:productKey">
                <ProductDetails />
              </Route>
              <Route path="/category=allProducts">
                <PdAll cart={cart} />
              </Route>
              <Route path="/category=frutis">
                <PdFrutis />|
              </Route>
              <Route path="/category=fish">
                <PdFish />
              </Route>
              <Route path="/category=fastfood">
                <PdFastfood />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
            <Footer />
          </Router>

        </Cart.Provider>
      </SeveCart.Provider>
    </HandleAddProduct.Provider>
  );
}

export default App;
