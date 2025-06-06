import { useState } from "react";
import "./App.css";
import CartSection from "./Components/CartSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Newsletter from "./Components/Newsletter";
import ProductsSection from "./Components/ProductsSection";
import ContextApi from "./assets/Context/ContextApi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ContextApi>
        <Header></Header>
        <main className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ProductsSection></ProductsSection>
            <CartSection></CartSection>
          </div>
        </main>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </ContextApi>
    </>
  );
}

export default App;
