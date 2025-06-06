import { useContext, useState } from "react";
import { ShopContext } from "../assets/Context/ContextApi";
import getimageUrl from "../data/ImageUrl";

export default function SingleProductCart({ product }) {
  const { AddtoCart } = useContext(ShopContext);
  const [isAddedtocard, setisAddedtocard] = useState(false);

  return (
    <>
      <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img
            src={getimageUrl(product.cover)}
            alt="Polo with Tipping Details"
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium">{product.name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center my-1">
              <div className="flex text-yellow-400">
                <span>★</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-300">★</span>
              </div>
              <span className="text-xs text-gray-500 ml-1">
                {product.rating}/5
              </span>
            </div>
            <span className="text-xs text-gray-700">
              ({product.stock} pcs left)
            </span>
          </div>
          <p className="font-bold">${product.price}</p>
          <button
            onClick={() => {
              AddtoCart(product);
              setisAddedtocard(!isAddedtocard);
            }}
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
          >
            {isAddedtocard ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
}
