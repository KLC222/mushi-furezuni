import { Row, Col } from 'react-bootstrap';
import {NavLink, Link} from 'react-router';
import logo from '/assets/images/company_logo.png'


export default function Footer(){
    return (
        <footer className="footer">
            <Row>
                <Col xs={6} md={6} style={{ textAlign: 'right' }}>
                    <p><Link to="/transaction-act" target="_blank">特定商取引法に基づく表示</Link></p>
                    <p><Link to="/privacypolicy"  target="_blank">プライバシーポリシー</Link></p>
                     <p><Link to='/tos' target="_blank">利用規約</Link></p>
                 </Col>
                <Col xs={6} lg={3}>
                    <p><Link to="/about">アステナルについて</Link></p>
                    <p><Link to="/products">製品について</Link></p>
                    <p><Link to="/qa">よくある質問</Link></p>
                    <p><Link to="/contact">お問い合わせ</Link></p>
                </Col>
                <Col xs={3}className="footer-logo">
                <NavLink to="/"><img src={logo} alt="logo" height={150}/></NavLink>
                </Col> 
            </Row>
        </footer>
    )
}