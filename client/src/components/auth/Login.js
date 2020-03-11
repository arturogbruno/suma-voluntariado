import React from 'react';
import AuthServices from '../../services/auth';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Auth.scss';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'arturo',
            password: 'arturo'
        }
        this.authServices = new AuthServices()
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postUser()
    }

    postUser = () => {
        this.authServices.login(this.state)
        .then(theLoggedUser => {
                this.setState({ username: '', password: '' })
                this.props.setUser(theLoggedUser)
                this.props.history.push('/home')
            })
            .catch(err => console.log({ err }))
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={{span: 3, offset: 2}} className="loginForm">
                        <h1>¡Nos encanta que vuelvas!</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group> 
                                <Form.Label>Usuario:</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                            </Form.Group>
                            <Form.Group className="loginBtn">
                                <Button type="submit">Iniciar sesión</Button>
                            </Form.Group>
                        </Form>
                        <div className="signupLnk">
                            <span className="lnk">¿Aún no tienes una cuenta? <Link to="/signup">Regístrate</Link></span>
                            <h1>{this.state.error ? 'Error' : ''}</h1>
                        </div>
                    </Col>

                    <Col xs={{span: 5, offset: 2}}>
                        <img className="loginImg" src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt=""/>
                    </Col>
                </Row>
            </Container>
        )
    }
}