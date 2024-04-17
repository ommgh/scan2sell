// src/contexts/ProductContext.tsx
import React, { createContext, useContext, useState } from "react";

type ProductContextType = {
  productName: string;
  setProductName: React.Dispatch<React.SetStateAction<string>>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [productName, setProductName] = useState<string>('');

    return (
        <ProductContext.Provider value={{ productName, setProductName }}>
            {children}
        </ProductContext.Provider>
    );
};
