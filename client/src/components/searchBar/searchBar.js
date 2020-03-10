import React from 'react';
import { Redirect } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            redirect: null
        }
    }

    handleChange = e => {
        this.setState({ searchTerm: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ redirect: `/activities/search/${this.state.searchTerm}`})
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <InputGroup className="mb-3">
                <FormControl type="text" name="query" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Busca tu actividad de voluntariado" />
                <InputGroup.Append>
                    <Button type="submit" variant="outline-secondary" onClick={(e) => this.handleSubmit(e)}>Buscar</Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}