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
                <img src="https://res.cloudinary.com/yelpcampagb/image/upload/v1584100201/ironhack-project3/lub9wr1pussxcbslmnrz.png" alt="facebook icon" className="socialIcon"/>
                <img src="https://res.cloudinary.com/yelpcampagb/image/upload/v1584100201/ironhack-project3/ms4fuuy3yrvqc2cxztpw.png" alt="instagram icon" className="socialIcon"/>
                <img src="https://res.cloudinary.com/yelpcampagb/image/upload/v1584100201/ironhack-project3/rap7hmsx1uqlwxcjttxr.png" alt="youtube icon" className="socialIcon"/>
                <img src="https://res.cloudinary.com/yelpcampagb/image/upload/v1584100201/ironhack-project3/nk6xfzehvrxjomjjwsa6.png" alt="twitter icon" className="socialIcon"/>
            </Col>
        </Row>
        </Container>
    )
}

export default Footer;