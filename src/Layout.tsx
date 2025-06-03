import React from "react"
import Footer from "./Footer"
import NavTop from "./NavTop"
import { Container } from "react-bootstrap"


type Props = {
    children: React.ReactNode;
}

export default function Layout(props: Props){
    return (
        <div className="min-vh-100 d-flex flex-column">
            <NavTop/>
            <Container className="flex-grow-1">
                {props.children}
            </Container>
            <Footer/>
        </div>
    )
}