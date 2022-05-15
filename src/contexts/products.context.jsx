import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ chiildren }) => {
  console.log("producr", PRODUCTS);
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  console.log("producr value", value);
  console.log("producr chiildren", setProducts);
  return (
    <ProductsContext.Provider value={value}>
      {chiildren}
    </ProductsContext.Provider>
  );
};
