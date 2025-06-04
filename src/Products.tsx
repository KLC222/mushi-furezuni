import {useSuspenseQuery} from "@tanstack/react-query";
import NavTop from "./NavTop"
import { Container, Row, Col } from "react-bootstrap"
import { Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { NavLink, Outlet, useParams, useNavigate, Link } from "react-router";
import Footer from "./Footer";
import { supabase } from "./supabase";
import ProductsCarousel from './ProductsCarousel';
import { ReactEventHandler, useState } from "react";
import {Button} from "react-bootstrap";
import Thumbnails from "./Thumbnail";
import { type ProductData, useCartContext } from './CartContext'


export default function Products(){
  const cartContext = useCartContext()
  const [selectedProduct, setSelectedProduct] = useState<number>();

  const [price, setPrice] = useState<number>();
  const navigate = useNavigate()

  const {data} = useSuspenseQuery({
    queryKey: ['products'],
    queryFn: async ()=> {
      const response = await supabase
        .from('products')
        .select(`*, 
          product_images(*)
        `)
      if (response.error) {
        throw response.error
      }
      return response.data
    }
})


const selectedProductData = selectedProduct != null && data.find(product => product.product_id === selectedProduct) || data[0]


const items = data.map(product=> {
  return <option key={product.product_id}  value={product.product_id}>{product.color}</option>
})



function setCart(product: ProductData){
  console.log("productData", product)
  if (!product) {
    alert("製品が選択されていません") // "Product not selected"
    return;
  }
  cartContext.setProduct(product)
  navigate('/cart')
}





    return <>

    <NavTop />
    <Container>
        <Row>
            <h2 className="py-5 d-flex justify-content-center">虫フレズニー</h2>
        </Row>
        <Row>
            <Col
                xs={12}
                md={7}>
                {/* Carousel */}
                <ProductsCarousel product={selectedProductData}/> 
                
            </Col>
            <Col className="pt-4">
             
                {/* label for form */}
                <Form.Label className="mt-4">色を選択してください</Form.Label>
                {/* select form */}
                <Form.Select onChange={event => {
                  
                  const value = Number.parseInt(event.target.value, 10)
                 
                  setSelectedProduct(value);
                  setPrice(data[value].price)
                  // const found = data.find(p => p.product_id === value)
                  // if (found) {
                  //    setPrice(found.price)
                  // }
                  console.log("selectedProduct changed", selectedProduct)
                }}>
                    <option disabled>色を選択</option>
                    {items}
                </Form.Select>
                <h5 className="mt-4">価格： {selectedProduct && price?.toString() || selectedProductData.price}円</h5> 
                <Button className="mt-4 btn-custom-primary" onClick={()=>setCart(selectedProductData)}>カートに入れる</Button>
                <p className="mt-4">*この製品は受注制作です。</p>
                <p className="mt-4">*発送にかかる日数は以下の注文・発送に関してを参照ください。</p>
                <p className="mt-4">*受注制作のため、一品ずつの購入をよろしくお願いいたします。</p>
          
            </Col>
         
        </Row>
        <Row>
<Nav variant="tabs" className="pt-5">
  <Nav.Item>
    <Nav.Link as={NavLink} end to="">商品説明</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={NavLink} to="dimensions">サイズ</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={NavLink} to="shipping">
      注文・発送に関して
    </Nav.Link>
  </Nav.Item>
</Nav>
{/* display each subpages under tabs */}
<Outlet />

            {/* <p>製品に関するよくある質問はこちらをご確認ください。</p>
        <p>minneから購入する</p> */}
           
            <Row  className="pt-3 mb-5">
                <Col className="text-end">
                <Button className="btn-custom-primary mt-4" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>ウェブサイトから購入</Button>
                </Col>
                <Col className="text-start">
                <a href="https://minne.com/@earthtenaru" target="blank"><Button className="mt-4 btn-custom-primary" >Minneから購入</Button></a>
                </Col>
            </Row>
            

        </Row>





    </Container>
    <Footer />
</>
}