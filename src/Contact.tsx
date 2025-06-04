import NavTop from "./NavTop";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact(){
  const recaptcha = useRef(null);
  const [token, setToken] = useState<string | null>(null);
  useEffect(()=>{
    console.log("token value",token)
  },[token])
  
  type FormData = {
    name: string,
    email: string,
    message: string
  }
  const SERVICE_ID = "contact_service";
  const TEMPLATE_ID = "contact_form";
  const PUBLIC_KEY = "JhICkmtueARw5mrzg";

  const initialFormData = Object.freeze({
    name: "",
    email: "",
    message: ""
  });

  const [formData, updateFormData] = useState<FormData>(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value.trim()
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(e, formData)
    if(token){
      //currentTarget for the whole form 
      emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert("Message Sent Successfully")
      },(error)=>{
        console.log(error.text);
        alert('Something went wrong!')
      });
      e.currentTarget.reset()
      }else{
        alert("reCAPTCHA認証が済んでいません。")
      }
    }
    return <>
    <NavTop />
    <Container>
        <h1 className="py-5 d-flex align-items-center justify-content-center">お問い合わせ</h1>
        <p>以下のフォームより、アステナルまたは虫フレズニーについてのお問い合わせなど、お気軽にお問い合わせください。</p>

        <p>お問い合わせいただいた内容は確認後、

        3日以内に返信できるよう努めて参ります。</p>

        <p>直接メールでのご連絡を希望される場合は、mushi@furezuni.com　までお気軽にお問い合わせいただけます。</p>
        <p>またこちらのページもご参照ください。</p>
        <Row className="py-5">
        <Col className="d-flex align-items-center justify-content-center">
        <Link to="/qa" target="_blank">よくある質問</Link>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
        <Link to="/products" target="_blank">製品について</Link>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
        <Link to="/about" target="_blank">アステナルについて</Link>
        </Col>
        </Row>
    <Form onSubmit={handleOnSubmit}>
    <Form.Group className="mb-3" controlId="name">
        <Form.Label>名前</Form.Label>
        <Form.Control required placeholder="名前を入力してください" name="name" onChange={handleChange}/>
        </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>メールアドレス</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} required placeholder="メールアドレスを入力してください" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>お問い合わせ内容</Form.Label>
        <Form.Control as="textarea" name="message" onChange={handleChange} required placeholder="お問い合わせ内容を入力してください" rows={3} />
      </Form.Group>
      <ReCAPTCHA onChange={token => {
        setToken(token);
      }} sitekey={import.meta.env.VITE_SITE_KEY}  ref={recaptcha}/>
      <div className=" d-flex justify-content-center">
      <Button className="custom-submit my-5" type="submit">
        送信
      </Button>
      
      </div>
      
    </Form>
    </Container>
    <Footer />
    </>
}

// reference
//https://dev.to/rajuwu/implement-react-bootstrap-forms-with-emailjs-in-react-app-2g9a
//https://medium.com/@alagappan.dev/using-emailjs-with-react-to-build-a-contact-form-for-your-website-5040966a814