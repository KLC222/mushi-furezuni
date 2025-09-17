import NavTop from './NavTop.tsx'
import Footer from './Footer.tsx'
import { Container, Row, Col, Button } from 'react-bootstrap'
import videoFile from '/assets/videos/furezuniMedium.mp4'
import ModelViewer from './ModelViewer.tsx'
import { Link } from 'react-router'

export default function Home() {


  return (
    <>

    <NavTop />
    <Container>
    <Row className="py-4">
          <Col sm={8} className="d-flex align-items-center justify-content-center">
      {/* model viewer here */}
      <ModelViewer/>
          </Col>
          <Col sm={4}>
            <div>
              <h1 className="padding-top">虫フレズニーで</h1>
              <h1>環境に優しく</h1>
              <h1>虫対策</h1>
              <h3>特許取得済みの独自発想</h3>
              <Link to='/products'><Button className="btn-custom-primary mt-4" size="lg">今すぐ購入</Button></Link>
            </div>
          </Col>
        </Row>
        <Row className="gap-4 gap-sm-5 justify-content-center mb-5"> {/* Adjust gap as needed */}
          <Col
            xs={11}
            sm={3}
            className="text-center animated-col expandable-col"
          >
            <h2>安全</h2>
            <div className="expandable-details center-content">
              <p>薬剤不使用で人にも環境にも優しい</p>
            </div>
          </Col>
          <Col
            xs={11}
            sm={3}
            className="text-center animated-col expandable-col"
          >
            <h2>繰り返し使える</h2>
            <div className="expandable-details">
              <p>どこでも何度でも使用可能</p>
            </div>
          </Col>
          <Col
            xs={11}
            sm={3}
            className="text-center animated-col expandable-col"
          >
            <h2>虫嫌いでも大丈夫</h2>
            <div className="expandable-details">
              <p>虫が怖くても誰でも簡単に捕獲</p>
            </div>
          </Col>
        </Row>
        </Container>

        <div　className="banner gy-5">
      <Container>
          <Row>
          <Col 
          xs={12}
          sm={9}
          className="home-banner-padding" data-bs-theme="dark">
        <h4　className="pt-sm-2 pt-md-5">家の中に虫が侵入して困っていませんか？</h4>
        <h4 className=" pb-sm-2 pb-md-5">アステナルは、あなたの健康と安らぎを取り戻す手助けをいたします。</h4>
        </Col>
        <Col
        xs={12}
        sm={3}
        className="d-flex justify-content-center align-items-center">
          <Link to='/about'><Button className="btn-custom-tertinary">アステナルとは</Button></Link> 
          </Col>
        </Row>
        </Container>
        </div>
        <Container>
        <Row className="mt-4 mb-5 gy-5">
        <Col sm={6} className="pt-sm-2 pt-md-4">
          <h4>虫の家庭侵入への対策</h4>
          <p className="pt-3">家の中に入ってきた虫は、しばしば健康を脅かします。
            人に害のない虫であっても、その存在が不快に感じられることもあります。アステナルは無害で、ペットや子供にも安心な方法を提案します。虫フレズニーは自然な方法で家庭から虫を駆除する手助けをします。
          </p>
          </Col>
          
          <Col sm={6} className="mb-3">  
              {/* render the video as embedded video*/}
              <video width="100%" controls>
                <source src={videoFile}  type="video/mp4" />
                </video>
          </Col>
          </Row>
          <Row className="g-3 px-3 py-2 mb-5 shine_review text-center">
              <h4 className="pb-2">購入されたお客様の声</h4>
          
              <Col xs='12' lg='4'>
              <div className="review"><p>簡単に虫を捕まえれるのでとても使いやすいです。また、虫を潰したりしないで逃がすことができるのでとてもいい商品を購入できました。 ありがとうございました。</p>
              <p>
                -minneレビューより</p></div>
              
              </Col>
              <Col xs='12' lg='4'>
              <div className="review"><p>とても使いやすいです。わりと小さな虫も捕獲できました。これがあれば安心です！大きなサイズもあれば購入したいです。</p><p>-minneレビューより</p></div>
              
              </Col>
              <Col xs='12' lg='4'>
              <div className="review"><p>とても丁寧な作りで使いやすそうです。 このサイズは小さな虫にピッタリです。購入して良かったです。 もう少し大きめで持ち手部分が出来るだけ長い物（虫からなるべく遠く）も発売していただきたいです。</p><p>-minneレビューより</p></div>
              
              </Col>
       
          
            <div className="text-center pt-3 pb-3">
            <a href="https://minne.com/@earthtenaru/reviews" target="blank">Minneでレビューをもっと見る</a>
            </div>
          </Row>
    </Container>
    <Footer />
    </>
  )
}


