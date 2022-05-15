import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import PRODUCT_DATA from "../../shop-data.json";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.style.scss";

const Shop = () => {
  // const { products } = useContext(ProductsContext);
  // console.log("products ", products);
  return (
    <div className="products-container">
      {PRODUCT_DATA.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
