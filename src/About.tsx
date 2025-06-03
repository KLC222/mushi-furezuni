import NavTop from "./NavTop";
import { Container } from "react-bootstrap";
import Footer from './Footer.tsx';
import {Button} from "react-bootstrap";
import { Link } from 'react-router'

export default function About(){
    return <>
    <NavTop />
    <Container>
    <h1 className="py-5 d-flex align-items-center justify-content-center">アステナルについて</h1>

    <h4 className="py-4 d-flex align-items-center justify-content-center">虫フレズニーを開発した　Earthtenaru (アステナル) とは</h4>
    <p  className="pb-4 d-flex align-items-center justify-content-center">虫フレズニーを開発した　アステナルは、Earth アース (地球) + sustainable サステイナブル (環境にやさしい) = Earthtenable アステナブルという造語をさらに簡略化した名称がアステナルです。
地球、環境にやさしい便利な新商品を開発することによって、人の生活水準をより豊かにし、さらに自然環境や社会に貢献できるような事業を目指しております。</p>
    
<h4 className="py-4 d-flex align-items-center justify-content-center">虫取り器の製作背景について</h4>
<p  className="pb-4 d-flex align-items-center justify-content-center">
虫は嫌い、怖い、触りたくない等の理由にて、自宅にて虫を発見した際は市販されている殺虫剤等を使って処分するということが一般的に行われております。
しかし、小さなお子様やペットがいらっしゃるご家庭や、食品の周りなど、様々な安全性に関する理由から殺虫剤を使用することを躊躇する場面も多々あります。　また虫はできるだけ殺さずに、殺虫剤を使わずに捕まえてそのまま室外に出されるもいらっしゃいます。　そのような時に、虫を生きたままで捕獲することができるような製品はこれまでほとんど販売されていないのが現状であります。
そこで私たちは虫フレズニーを開発いたしました。この商品を各家庭に備えておけば、虫が急に出た場合でも簡単に、人に、虫に、環境に安全に捕獲処分することが可能となるのです。虫フレズニーで虫を室外に出すことにより、子供たちには昆虫をやさしく外に戻す経験をし、自然との共存に関する貴重な教訓を提供することができます。
アステナルは、単なる害虫駆除を超えた製品を開発しました。虫フレズニーを使用することで、単に昆虫を処分するだけでなく、自然環境保全に対する意識向上へと繋がっていけるものと思っております。</p>
    <div className=" d-flex justify-content-center">
        <Link to='/products'><Button className="my-5 btn-custom-primary">虫フレズニーを購入</Button></Link> 
    </div>
    </Container>
    <Footer />
    </>
}