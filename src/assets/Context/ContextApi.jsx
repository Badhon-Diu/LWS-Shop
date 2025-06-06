import { createContext, useState } from "react";
import getAllProducts from "../../data/products";

export const ShopContext = createContext();
export default function ContextApi({ children }) {
  const products = getAllProducts();
  const [displayallproducts, setdisplayallproducts] = useState(products);

  const [carts, setcarts] = useState([]);

  //   Search
  function Search(searchText) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setdisplayallproducts(filteredProducts);
  }

  //   function Sort

  function Sort(sortType) {
    if (sortType == "most-popular") {
      let filterArray = products.filter((product) => product.rating > 3);
      setdisplayallproducts(filterArray);
    } else if (sortType == "newest") {
      let filterArray = products.filter((product) => product.rating < 3);
      setdisplayallproducts(filterArray);
    }

    console.log(sortType);
  }

  //   Function fo add to cart

  function AddtoCart(item) {
    let isadded = carts.find((cart) => cart.id === item.id);

    if (isadded) {
      let filterdata = carts.filter((cart) => cart.id !== item.id);
      setcarts(filterdata);
    } else {
      setcarts([...carts, item]);
    }
  }
  //   Function fo remove from cart

  function RemoveFromCart(itemId) {
    //console.log(itemId)
    let filterdata = carts.filter((cart) => cart.id !== itemId);
    setcarts(filterdata);
  }

  //console.log(carts);
  const data = {
    carts,
    AddtoCart,
    displayallproducts,
    Search,
    Sort,
    RemoveFromCart,
  };

  return <ShopContext.Provider value={data}>{children}</ShopContext.Provider>;
}
