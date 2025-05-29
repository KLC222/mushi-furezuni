import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { Row, Col } from "react-bootstrap"
import { type ProductData } from './CartContext'



type Props = {
    product: ProductData;
}

export default function ProductsCarousel(props: Props) {
    
    const [index, setIndex] = useState<number>();

 const items = props.product.product_images.map((image, index)=>{
 
    return (
        
        <Carousel.Item key={image.image_id}>
            <img
          className="d-block w-100"
          src={image.image_url}
          alt={image.image_alt?? ""}
          onClick={()=>setIndex(index)}
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      
    )
 })

 const thumbnails = props.product.product_images.map((image, index)=>{

    return (<>
            <div className="p-2">
                <Image

                className="d-block w-100 thumbnails" 
                src={image.image_url}
                alt={image.image_alt?? ""}
                thumbnail
                onClick={()=>setIndex(index)}
                /></div>
            </>
    )
 })

  return (
    <>
    <Row>
    <Col xs={8}>
    <Carousel data-bs-theme="dark" indicators={false} activeIndex={index} onSelect={(index) => {setIndex(index)}}>
      {items}
    
    </Carousel>
    </Col>
    <Col xs={4}>
    <Stack gap={1}>{thumbnails}</Stack>
    </Col>
    </Row>
    </>
  );
 
}
