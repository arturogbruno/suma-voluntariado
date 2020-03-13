import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import AuthServices from '../../services/auth';
import './Signup.scss';

export default class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            email: '',
            role: ''
        }

        this.authServices = new AuthServices()
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.postUser();
    }

    postUser = () => {
        this.authServices.signup(this.state)
        .then(theLoggedNewUser => {
            this.setState({ username: '', password: '' })
            this.props.setUser(theLoggedNewUser)
            this.props.history.push('/home')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="signup">
                <div className="signupForm">
                    <h1>¡Únete y suma!</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group> 
                            <Form.Label>Soy:</Form.Label>
                                <Form.Control as="select" name="role" value={this.state.role} onChange={this.handleChange} required >
                                    <option value="" disabled defaultValue>Selecciona tu rol</option>
                                    <option value="volunteer">Voluntario</option>
                                    <option value="organization">Organización</option>
                                </Form.Control>
                        </Form.Group>
                        <Form.Group> 
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group> 
                            <Form.Label>Usuario:</Form.Label>
                            <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group className="signupBtn">
                            <Button type="submit">Registrarse</Button>
                        </Form.Group>
                    </Form>
                </div>

                <div>
                    <span>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></span>
                    <h1>{this.state.error ? 'Error' : ''}</h1>
                </div>
            </div>
        )
    }
}