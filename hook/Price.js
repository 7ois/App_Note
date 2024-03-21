import React, { createContext, useState } from "react";

const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const totalPrice = items.reduce((total, currentItem) => {
    return total + currentItem.price;
  }, 0);

  const updateItems = (newItems) => {
    setItems(newItems);
    console.log(items);
  };

  return (
    <PriceContext.Provider value={{ items, totalPrice, updateItems }}>
      {children}
    </PriceContext.Provider>
  );
};

export default PriceContext;
