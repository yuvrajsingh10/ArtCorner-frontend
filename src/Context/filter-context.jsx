import React, { useState, useEffect } from "react";
import { productService } from "../features/products/productService";

export const filterContext = React.createContext({
  isLoading: false,
  items: [],
  updatedItems: [],
  filterByPrice: () => {},
  filterByCategory: () => {},
});

export default function FilterProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [updatedItems, setUpdatedItems] = useState([]);

  function filterByPrice(filter) {
    setIsLoading(true);
    const filter_arr = filter.split(",");
    console.log(filter)
    const ans = items.filter(
      (item) => item.price >= filter_arr[0] && item.price <= filter_arr[1]
    );
    setUpdatedItems([...ans]);
    setIsLoading(false);
  }

  function filterByCategory(filter) {
    setIsLoading(true);
    const ans = items.filter((item) => item.category === filter);
    setUpdatedItems([...ans]);
    setIsLoading(false);
  }

  async function Fetch() {
    setIsLoading(true);
    const res = await productService.getProducts();
    setItems([...res]);
    setUpdatedItems([...res]);
    setIsLoading(false);
  }

  useEffect(() => {
    Fetch();
  }, []);

  const ctx_value = {
    isLoading,
    items,
    updatedItems,
    filterByPrice,
    filterByCategory,
  };
  return (
    <filterContext.Provider value={ctx_value}>
      {props.children}
    </filterContext.Provider>
  );
}
