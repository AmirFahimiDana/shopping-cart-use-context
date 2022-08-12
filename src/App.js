import "./App.css";

//react-router-dom version 5
//import { Route, Switch, Redirect } from "react-router-dom";

//react-router-dom version 6
import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />

        {/* react-router-dom version 5 */}
        {/* <Switch> */}
          {/* <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" /> */}
        {/* </Switch> */}

        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
        
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
