import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import AuthServices from '../../services/auth';
import './Login.scss';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.authServices = new AuthServices()
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.postUser();
    }

    postUser = () => {
        this.authServices.login(this.state)
        .then(theLoggedUser => {
                this.setState({ username: '', password: '' })
                this.props.setUser(theLoggedUser)
                this.props.history.push('/home')
            })
            .catch(err => console.log( err ))
    }

    render() {
        return (
            <div className="login">
                <div className="loginForm">
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
                </div>

                <div>
                    <span className="lnk">¿Aún no tienes una cuenta? <Link to="/signup">Regístrate</Link></span>
                    <h1>{this.state.error ? 'Error' : ''}</h1>
                </div>
            </div>
        )
    }
}