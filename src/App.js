import { useEffect, useReducer } from "react";
import "./App.css";
import cartReducer from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const jsonData = await data.json();

    dispatch({
      type: "ADD_PRODUCTS",
      payload: jsonData.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div style={{display: "flex"}}>
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
