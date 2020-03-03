import React from 'react';
import AuthServices from '../../services/auth';

class Signup extends React.Component {
    constructor(props) {
        super(props)

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
        this.authServices.signup(this.state)
        .then(theLoggedNewUser => {
            this.setState({ username: '', password: '' })
            this.props.setUser(theLoggedNewUser)
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
            <div>
                <h1>Registro de usuarios</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Usuario</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <label>Contraseña</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Registrarse" />
                </form>

                <h1>{this.state.error ? 'Error' : ''}</h1>
            </div>
        )
    }
}

export default Signup