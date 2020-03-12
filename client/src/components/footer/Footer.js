import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.scss';


const Footer = () => {
    return (
        <Container fluid>
        <Row className="footer">
            <Col><img src="https://res.cloudinary.com/yelpcampagb/image/upload/v1583620107/ironhack-project3/inemcz4pjwjcfqppheev.png" alt=""/></Col>
            <Col xs={6}>
                <Link to="#">Quiénes somos</Link>
                <Link to="#">Preguntas frecuentes</Link>
                <Link to="#">Contacto</Link>
            </Col>
            <Col>
                Social
            </Col>
        </Row>
        </Container>
    )
}

export default Footer;