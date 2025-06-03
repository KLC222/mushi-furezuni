import { Container } from "react-bootstrap";
import NavTop from './NavTop.tsx';
import Footer from './Footer.tsx';
import {Link} from 'react-router';

export default function Qa(){
    return <>
    <NavTop />
    <Container>
    <h1　className="py-5 d-flex align-items-center justify-content-center">特定商取引法に基づく表記
    </h1>
    <p className="py-1 fw-bold">事業者
    </p>
    <p>郡司賢一</p>
    <p className="py-1 fw-bold">住所</p>
    <p>〒274-0815 千葉県船橋市西習志野4-15-16</p>
    <p className="py-1 fw-bold">電話番号</p>
    <p>0474698523</p>
    <p className="py-1 fw-bold">販売価格</p>
    <p>各商品ページに記載の金額（税込）</p>
    <p className="py-1 fw-bold">送料</p>
    <p>各商品ページに記載の金額（税込）</p>
    <p className="py-1 fw-bold">お支払い方法</p>
    <p>クレジットカード決済</p>
    <p className="py-1 fw-bold">お支払い時期</p>
    <p>商品注文時</p>
    <p className="py-1 fw-bold">作品の引渡し時期</p>
    <p>作品代金の着金の確認ができた時点から、注文・発送に関して（各作品ページ下部）に記載の「発送までの目安」の日までに発送いたします。</p>
    <p className="py-1 fw-bold">返品に関する事項</p>
    <p>お客様のご都合（イメージと異なる、注文間違い等）による返品・交換は、原則としてお受けしておりません。あらかじめご了承ください。</p>

<p>ただし、以下のいずれかに該当する場合には、商品到着後7日以内にご連絡いただいたうえで、販売者の責任にて返品または交換に対応いたします。</p>
<p></p>
<ul>
<li>お届けした商品に明らかな欠陥・破損がある場合</li>
<li>ご注文内容と異なる商品が届いた場合</li>
<li>数量不足や滅失など、販売者に起因する不備があった場合</li>
</ul>

<p>上記に該当する返品・交換にかかる送料は、当方にて負担いたします。</p>
<p className="pb-5">なお、事前のご連絡なく返送された場合や、商品到着後7日を経過した場合の対応はいたしかねますので、ご了承ください。</p>
    </Container>
    <Footer />
    </>
}