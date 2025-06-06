import { useContext } from "react";
import { ShopContext } from "../assets/Context/ContextApi";
import SingleProductCart from "./SingleProductCart";

export default function ProductsSection() {
  //const displayallproducts = getAllProducts();

  const { displayallproducts, Sort } = useContext(ShopContext);
  return (
    <>
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Products</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Sort by:</span>
            <select
              onClick={(e) => Sort(e.target.value)}
              className="border rounded-md px-2 py-1 text-sm"
            >
              <option value="most-popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="loTohigh">Price: Low to High</option>
              <option value="highTolow">Price: High to Low</option>
            </select>
          </div>
        </div>
        {/* Products Grid */}
        {displayallproducts && displayallproducts.length > 0 ? (
          <div className="product-grid">
            {displayallproducts.map((product) => (
              <SingleProductCart
                key={product.id}
                product={product}
              ></SingleProductCart>
            ))}
          </div>
        ) : (
          <h1
            className=" my-4 text-center text-3xl font-semibold
            text-gray-600 "
          >
            NO Products Found
          </h1>
        )}
      </div>
    </>
  );
}
