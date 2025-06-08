import { createContext, useEffect, useState } from "react";
import getAllProducts from "../../data/products";

export const ShopContext = createContext();
export default function ContextApi({ children }) {
  const products = getAllProducts();
  const [displayallproducts, setdisplayallproducts] = useState(products);

  const [carts, setcarts] = useState([]);
  const [subtotal, setsubtotal] = useState("");
  const [itemCount, setitemCount] = useState(1);

  function itemIrement(singlecart, stockNumber) {
    if (itemCount < stockNumber) {
      setitemCount(itemCount + 1);
    }
  }
  function itemDecrement(singlecart, stockNumber) {
    if (itemCount !== 1) {
      setitemCount(itemCount - 1);
    }
  }

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
    } else if (sortType === "highTolow") {
      const sortedByPriceHighToLow = products.sort((a, b) => b.price - a.price);
      setdisplayallproducts(sortedByPriceHighToLow);
    } else if (sortType === "loTohigh") {
      const sortedByPricelotihigh = products.sort((b, a) => a.price - b.price);
      setdisplayallproducts(sortedByPricelotihigh);
    }

    console.log(sortType);
  }

  useEffect(() => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    setsubtotal(totalPrice);
  }, [carts]);

  console.log(subtotal);
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

  function handleEditedTask(product) {
    setdisplayallproducts(
      displayallproducts.map((singleproduct) => {
        if (singleproduct.id === product.id) {
          return product;
        } else {
          return singleproduct;
        }
      })
    );
  }

  //console.log(carts);
  const data = {
    carts,
    AddtoCart,
    displayallproducts,
    Search,
    Sort,
    RemoveFromCart,
    subtotal,
    itemIrement,
    itemCount,
    handleEditedTask,
    itemDecrement,
  };

  return <ShopContext.Provider value={data}>{children}</ShopContext.Provider>;
}
