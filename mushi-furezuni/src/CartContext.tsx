import { useState, createContext, useContext } from 'react';
import useLocalStorageState from 'use-local-storage-state'


export type ProductData = {
    color: string;
    created_at: string;
    description: string | null;
    price: number;
    product_id: number;
    product_name: string;
    stripe_price_id: string;
    product_images: {
        created_at: string;
        image_alt: string | null;
        image_id: number;
        image_url: string;
        product_id: number;
    }[];
}
//why export?
export type CartContextValue = {
    cart: ProductData | null
    setProduct: (product: ProductData) => void
    removeProduct: () => void
}

export const CartContext = createContext<CartContextValue>({
    cart: null,
    setProduct: () => {},
    removeProduct: () => {}
})

export function useCartContext() {
    return useContext(CartContext)
}

export function CartProvider(props: { children: React.ReactNode }){
    const [cart, setCart] = useLocalStorageState<ProductData | null>('cart', {
        defaultValue: null,
      });
  
    function setProduct(newProduct: ProductData){
        console.log("setProduct working", newProduct)
        setCart(newProduct)
    }
    function removeProduct(){
        setCart(null);
    }
    
    return <>
    <CartContext.Provider value={{cart, setProduct, removeProduct}}>
        {props.children}
    </CartContext.Provider>
    </>

}