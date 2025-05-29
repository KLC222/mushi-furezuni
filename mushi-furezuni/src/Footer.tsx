import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router';

export default function Footer(){
    return (
        <footer className="footer">
            <Row>
                <Col style={{ textAlign: 'right' }}>
                    <p><Link to="/transaction-act" target="_blank">特定商取引法に基づく表示</Link></p>
                    <p><Link to="/privacypolicy"  target="_blank">プライバシーポリシー</Link></p>
                     <p><Link to='/tos' target="_blank">利用規約</Link></p>
                 </Col>
                <Col>
                    <p><Link to="/about">アステナルについて</Link></p>
                    <p><Link to="/product">製品について</Link></p>
                    <p><Link to="/qa">よくある質問</Link></p>
                    <p><Link to="/contact">お問い合わせ</Link></p>
                </Col>
            </Row>
        </footer>
    )
}