import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/assets/images/company_logo.png'
import {NavLink, Link} from 'react-router';
import { ImCart } from "react-icons/im";
import { useEffect, useState } from 'react';

export default function NavTop() {

  

  return (
    <Navbar expand="lg" sticky="top" className="navbar navbar-effects nav-text" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/"><img src={logo} alt="logo" height={80}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-grow-1">
            <Nav.Link as={NavLink} to="/" end className="d-flex flex-grow-1 nav-ani">ホーム</Nav.Link>
            <Nav.Link as={NavLink} to="/products" end className="d-flex flex-grow-1 nav-ani">商品</Nav.Link>
            <Nav.Link as={NavLink} to="/about" end className="d-flex flex-grow-1 nav-ani">アステナルについて</Nav.Link>
            <Nav.Link as={NavLink} to="/qa" end className="d-flex flex-grow-1 nav-ani">よくある質問</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" end className="d-flex flex-grow-1 nav-ani">お問い合わせ</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" end className="d-flex flex-grow-1 nav-ani">ブログ</Nav.Link>
            <Link to="/cart" className="d-done d-md-inline nav-cart pt-1 cart-icon" ><ImCart/></Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );
}

