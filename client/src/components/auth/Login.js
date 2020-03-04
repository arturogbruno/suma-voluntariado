import React from 'react';
import AuthServices from '../../services/auth';
import { FormControl, Button, TextField } from '@material-ui/core';
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
        e.preventDefault()
        this.postUser()
    }

    postUser = () => {
        this.authServices.login(this.state)
        .then(theLoggedUser => {
            console.log(theLoggedUser)
            this.setState({ username: '', password: '' })
            this.props.setUser(theLoggedUser)
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({
                username: this.state.username,
                password: this.state.password,
                error: true
            });
        });
    }

    render() {
        return (
            <div className="loginPage">
                <div className="loginForm">
                    <h1>¡Nos encanta que vuelvas!</h1>

                    <form onSubmit={this.handleSubmit}>
                        <FormControl className="formControl"> 
                            <TextField label="Usuario" variant="outlined" color="secondary" name="username" value={this.state.username} onChange={this.handleChange} required/>
                        </FormControl>
                        <FormControl className="formControl">
                            <TextField label="Contraseña" variant="outlined" color="secondary" type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                        </FormControl>
                        <Button variant="outlined" color="secondary">Iniciar sesión</Button>
                    </form>

                    <h1>{this.state.error ? 'Error' : ''}</h1>
                </div>
            </div>
        )
    }
}