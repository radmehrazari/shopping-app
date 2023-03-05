import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.json'

export const ProductContext = createContext({
  id: "",
  name: "",
  imageUrl: "",
  price: "",
});


export const ProductProvider = ({children}) =>{
    const [ defaultProducts,setProducts ] = useState(SHOP_DATA);
    const value = {defaultProducts,setProducts};

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>


}