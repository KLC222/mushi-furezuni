import {BrowserRouter, Routes, Route, Navigate} from 'react-router';
import Products from './Products.tsx'
import Contact from './Contact.tsx'
import About from './About.tsx'
import Qa from './QA.tsx'
import Home from './Home.tsx'
import ProductDetails from './ProductDetails.tsx';
import ProductDimensions from './ProductDimensions.tsx';
import ProductShipping from './ProductShipping.tsx';
import TransactionAct from './TransactionAct.tsx'
import ToS from './ToS.tsx'
import PrivacyPolicy from './PrivacyPolicy.tsx';
import Checkout from './Checkout.tsx';
import Cart from './Cart.tsx';
import { CartProvider } from './CartContext.tsx';
import CheckoutReturn from './CheckoutReturn.tsx';
import Blog from './Blog.tsx';


export default function App(){

    
    return <>
        <CartProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />}>
                    <Route path='' element={<ProductDetails />}/>
                    <Route path="dimensions" element={<ProductDimensions/>}/>
          <Route path="shipping" element={<ProductShipping/>}/>
                </Route>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/qa' element={<Qa />}/>
                <Route path='/transaction-act' element={<TransactionAct/>}/>
                <Route path='/tos' element={<ToS/>}/>
                <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path="/return" element={<CheckoutReturn />} />
                <Route path='/blog' element={<Blog/>}>
                
                </Route>
            </Routes>
        </BrowserRouter>
        </CartProvider>
    </>
}