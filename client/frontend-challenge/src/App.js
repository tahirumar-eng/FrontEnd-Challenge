import "./App.css";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router-dom";
import AddItems from "./components/additems/AddItems";
import Items from "./components/items/Items";
import { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/home/Home";
function App() {
  const [cart, setCart] = useState([]);

  //   add-to-cart    //
  const addTOCart = (item) => {
    const find = cart.find((c) => c.id === item.id);
    if (find) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...find, quantity: find.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item }]);
    }
  };

  const deleteItem = (item) => {
    const filter = cart.filter((c) => c.id !== item.id);
    setCart(filter);
  };
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <BrowserRouter>
        <Header cart={cart} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-items">
            <AddItems />
          </Route>
          <Route path="/items">
            <Items onAdd={addTOCart} />
          </Route>
          <Route path="/checkout">
            <Checkout cart={cart} onDelete={deleteItem} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
