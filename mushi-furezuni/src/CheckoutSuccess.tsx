import NavTop from "./NavTop";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./Layout";


type Props = {
    email: string,
}
export default function CheckoutSuccess(props: Props){
    return (
     
            <Layout>
          
                <Row>
                    <Col><h2>ご購入ありがとうございます</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <p>お客様のメール宛に購入完了のメールを送信させていただきました。</p>
                        <p>商品の到着まで、今しばらくお待ちください。</p>
                        <p>ご質問がありましたら<a href="mailto:orders@example.com">orders@example.com</a>までお気軽にお問い合わせください。</p>
                    </Col>
                </Row>
              
                </Layout>
    )
}

