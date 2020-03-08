import React from 'react';
import {Container, Form, Col, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import OrganizationsServices from '../../services/organizations';
import FilesServices from "../../services/files";
import './NewOrganization.scss';

export default class NewOrganization extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newOrganization: {
                name: "",
                address: "",
                email: "",
                webpage: "",
                phone: "",
                description: "",
                imgPath: "",
                user: this.props.loggedInUser._id
            },
            showModal: false
        }

        this.organizationsServices = new OrganizationsServices();
        this.filesServices = new FilesServices();
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({
            newOrganization: { ...this.state.newOrganization, [name]: value }
        })
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imgPath", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinary es: ', response.secure_url);
                this.setState({
                    newOrganization: { ...this.state.newOrganization, imgPath: response.secure_url }
               })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.createOrganization();
    }

    createOrganization() {
        this.organizationsServices.createOrganization(this.state.newOrganization)
            .then(() => this.setState({ newOrganization: { name: "", address: "", email: "", webpage: "", phone: "", description: "", imgPath: "" }, showModal: true }))
            .catch(err => console.log(err))
    }

    closeModal = () => this.setState({ showModal: false })
    openModal = () => this.setState({ showModal: true })

    render() {
        return(
            <Container className="newOrganization">
                <h1>Da de alta tu organización:</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.newOrganization.name} onChange={this.handleChange} placeholder="" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Label>Dirección:</Form.Label>
                        <Form.Control type="text" name="address" value={this.state.newOrganization.address} onChange={this.handleChange} placeholder="" required />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.newOrganization.email} onChange={this.handleChange} placeholder="" required />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Página web:</Form.Label>
                            <Form.Control type="text" name="webpage" value={this.state.newOrganization.webpage} onChange={this.handleChange} placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Teléfono:</Form.Label>
                            <Form.Control name="phone" value={this.state.newOrganization.phone} onChange={this.handleChange} required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control as="textarea" rows="6" name="description" value={this.state.newOrganization.description} onChange={this.handleChange} required />
                        </Form.Group>
                    </Form.Row>
                
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Imagen o logo de la organización:</Form.Label>
                            <Form.Control type="file" name="imgPath" onChange={this.handleFileUpload} />
                        </Form.Group>
                        <div as={Col} className="formButton">
                            <Button variant="primary" type="submit">Crear organización</Button>
                        </div>
                    </Form.Row>
                </Form>
                <div className="imgPreview">
                    <img src={this.state.newOrganization.imgPath} alt=""/>
                </div>

                <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Organización creada</Modal.Title>
                </Modal.Header>
                    <Modal.Body>Tu organización ya está dada de alta. Ahora puedes empezar a crear las actividades.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>

            </Container>
        );
    }
}