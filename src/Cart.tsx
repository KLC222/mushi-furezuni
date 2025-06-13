import {useContext, useState, Suspense} from 'react'
import { CartContext } from './CartContext.tsx'
import Container from 'react-bootstrap/Container';
import NavTop from './NavTop.tsx';
import Footer from './Footer.tsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap'
import Checkout from './Checkout.tsx';


export default function Cart(){
    const [isShown, setIsShown] = useState(false);
    const context = useContext(CartContext);
    const {cart, setProduct, removeProduct} = context;
    console.log("cartContents", cart)
    
    const handleCheckoutClick = event => {
        event.preventDefault();
        setIsShown(current=> !current);
    }


    return <>
        <NavTop/>
        <Container className="center-product">
        <h1>*ページ制作中にて購入いただけません。</h1>
            {cart && <>
            <h2 className="pt-5" style={{ textAlign: 'center' }}>ご注文内容</h2><Table className='my-5' bordered>
                <thead>
                    <tr>
                    <th></th>
                    <th>注文詳細</th>
                    <th></th>
                    <th>個数</th>
                    <th>値段</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{cart && <CloseButton onClick={removeProduct}/>}</td>
                    <td>{cart?.product_name} {cart?.color}</td>
                    <td>
                        <div className="imgBox">
                        {cart && <img src={cart?.product_images[0].image_url} alt="alt" width="60%" height="60%" className='image-section'/> }
                        </div>
                    </td>
                    <td>{cart&& 1}</td>
                    <td>{cart?.price}円</td>
                    </tr>
                    <tr>
                    <td colSpan={4} style={{ textAlign: 'right' }}>送料</td>
                    <td>600円</td>
                    </tr>
                    <tr>
                    <td colSpan={4} style={{ textAlign: 'right' }}>合計金額（税込）</td>
                    <td>{cart && cart.price + 600}円</td>
                    </tr>
                </tbody>
            </Table> 
            <Button className="btn-custom-primary my-4 button-center" onClick={handleCheckoutClick}>お支払いへ進む</Button>
            
            {isShown  && <>
            <Suspense fallback={<p className="pt-5">読み込み中...</p>}>
            <Checkout/>
            </Suspense>
            </>}
            </>
            || 
            <>
                <div className='center mx-auto'>
                <Row className="pt-5">
                <h3>カートに商品はありません。</h3>
                <Link to="/products">商品を追加する</Link>
                </Row>
                </div>
            </>
            }

            
        </Container>
        <Footer/>
    </>
        
    

}