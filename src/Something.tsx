import { CartProvider } from "./CartContext"
import Cart from "./Cart";



export default function Something(){
    return <>
        <CartProvider>
            <Cart />
        </CartProvider>
    </>
}
