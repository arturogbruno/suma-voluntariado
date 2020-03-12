import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OrganizationsServices from '../../services/organizations';
import FilesServices from '../../services/files';

export default class EditOrganizationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            organization: {
                name: this.props.organization.name,
                description: this.props.organization.description,
                address: this.props.organization.address,
                phone: this.props.organization.phone,
                email: this.props.organization.email,
                webpage: this.props.organization.webpage,
                imgPath: this.props.organization.imgPath
            }
        }

        this.organizationsServices = new OrganizationsServices();
        this.filesServices = new FilesServices();
    }

    
    handleChange = e => {
        let { name, value } = e.target;
        this.setState({
            organization: { ...this.state.organization, [name]: value }
        })
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imgPath", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinary es: ', response.secure_url)
                this.setState({
                    organization: { ...this.state.organization, imgPath: response.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.saveChanges();
    }

    saveChanges = () => {
        this.organizationsServices.updateOrganization(this.props.organization._id, this.state.organization)
            .then(() => this.finishAction())
            .catch(err => console.log(err))
    }

    finishAction = () => {
        this.props.closeModal();
        this.props.refreshData();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.organization.name} onChange={this.handleChange} placeholder="" required />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Dirección:</Form.Label>
                    <Form.Control type="text" name="address" value={this.state.organization.address} onChange={this.handleChange} placeholder="" required />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.organization.email} onChange={this.handleChange} placeholder="" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Página web:</Form.Label>
                        <Form.Control type="text" name="webpage" value={this.state.organization.webpage} onChange={this.handleChange} placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Teléfono:</Form.Label>
                        <Form.Control name="phone" value={this.state.organization.phone} onChange={this.handleChange} required />
                    </Form.Group>
                </Form.Row>

                <Form.Row> 
                    <Form.Group as={Col}>
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control as="textarea" rows="6" name="description" value={this.state.organization.description} onChange={this.handleChange} required />
                    </Form.Group>
                </Form.Row>
            
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Imagen o logo de la organización:</Form.Label>
                        <Form.Control type="file" name="imgPath" onChange={this.handleFileUpload} />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">Guardar cambios</Button>
            </Form>
        )
    }
}
