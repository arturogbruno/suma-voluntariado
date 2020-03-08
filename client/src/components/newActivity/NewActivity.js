import React from 'react';
import {Container, Form, Col, Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ActivitiesServices from '../../services/activities';
import OrganizationsServices from '../../services/organizations';
import FilesServices from "../../services/files";
import './NewActivity.scss';

export default class NewActivity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newActivity: {
                title: "",
                category: "",
                description: "",
                dates: "",
                time: "",
                location: "",
                minParticipants: "",
                maxParticipants: "",
                requirements: "",
                imgPath: "",
                organization: ""
            },
            userOrganization: "",
            showModal: false
        }

        this.activitiesServices = new ActivitiesServices();
        this.organizationsServices = new OrganizationsServices();
        this.filesServices = new FilesServices();
    }

    componentDidMount= () => this.fetchOrganization();

    fetchOrganization() {
        this.organizationsServices.getOrganizationByUser(this.props.loggedInUser._id)
        .then(organization => this.setState({ newActivity: { organization: organization[0]._id }, userOrganization: organization[0] }))
        .catch(err => console.log(err))
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({
            newActivity: { ...this.state.newActivity, [name]: value }
        })
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imgPath", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinary es: ', response.secure_url);
                this.setState({
                    newActivity: { ...this.state.newActivity, imgPath: response.secure_url }
               })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.createActivity();
    }

    createActivity() {
        this.activitiesServices.createActivity(this.state.newActivity)
            .then(() => this.setState({ newActivity: { title: "", category: "", description: "", date: "", time: "", location: "", minParticipants: "", maxParticipants: "", requirements: "", imgPath: "", organization: "" }, showModal: true }))
            .catch(err => console.log(err))
    }

    closeModal = () => this.setState({ showModal: false })
    openModal = () => this.setState({ showModal: true })

    render() {
        return(
            <Container className="newActivity">
                <h1>Da de alta una actividad:</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} xs={7}>
                            <Form.Label>Título:</Form.Label>
                            <Form.Control type="text" name="title" value={this.state.newActivity.title} onChange={this.handleChange} placeholder="" required />
                        </Form.Group>

                        <Form.Group as={Col} xs={5}>
                            <Form.Label>Organización:</Form.Label>
                            <Form.Control name="organization" value={this.state.userOrganization.name} disabled />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} xs={4}> 
                            <Form.Label>Categoría:</Form.Label>
                            <Form.Control as="select" name="category" value={this.state.newActivity.category} onChange={this.handleChange} required>
                                <option value="" disabled defaultValue>Selecciona una categoría</option>
                                <option value="ambiental">Ambiental</option>
                                <option value="comunitario">Comunitario</option>
                                <option value="cultural">Cultural</option>
                                <option value="deportivo">Deportivo</option>
                                <option value="educativo">Educativo</option>
                                <option value="ocio y tiempo libre">Ocio y tiempo libre</option>
                                <option value="proteccion civil">Protección civil</option>
                                <option value="social">Social</option>
                                <option value="socio-sanitario">Socio-sanitario</option>
                                <option value="otro">Otro</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} xs={4}>
                            <Form.Label>Fecha:</Form.Label>
                            <Form.Control type="date" name="dates" value={this.state.newActivity.dates} onChange={this.handleChange} placeholder="" required />
                        </Form.Group>

                        <Form.Group as={Col} xs={4}>
                            <Form.Label>Hora:</Form.Label>
                            <Form.Control type="text" name="time" value={this.state.newActivity.time} onChange={this.handleChange} placeholder="10:00 h - 13:00 h" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} xs={6}>
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control as="textarea" rows="5" name="description" value={this.state.newActivity.description} onChange={this.handleChange} placeholder="Indica aquí la descripción de la actividad, en qué consiste y todos aquellos datos que sean de interés" required />
                        </Form.Group>

                        <Form.Group as={Col} xs={6}>
                            <Form.Label>Requerimientos:</Form.Label>
                            <Form.Control as="textarea" rows="5" name="requirements" value={this.state.newActivity.requirements} onChange={this.handleChange} placeholder="Indica aquí los requerimientos necesarios para poder ejercer como voluntario en esta actividad" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Ubicación:</Form.Label>
                            <Form.Control type="text" name="location" value={this.state.newActivity.location} onChange={this.handleChange} placeholder="Indica el punto de encuentro" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} xs={3}>
                            <Form.Label>Número mínimo de participantes:</Form.Label>
                            <Form.Control type="number" min="1" max="100" name="minParticipants" value={this.state.newActivity.minParticipants} onChange={this.handleChange} required />
                        </Form.Group>

                        <Form.Group as={Col} xs={3}>
                            <Form.Label>Número máximo de participantes:</Form.Label>
                            <Form.Control type="number" min="1" max="100" name="maxParticipants" value={this.state.newActivity.maxParticipants} onChange={this.handleChange} required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Imagen de la actividad:</Form.Label>
                            <Form.Control type="file" name="imgPath" onChange={this.handleFileUpload} />
                        </Form.Group>

                        <div as={Col} className="formButton">
                            <Button variant="primary" type="submit">Crear actividad</Button>
                        </div>
                    </Form.Row>
                </Form>
                <div className="imgPreview">
                    <img src={this.state.newActivity.imgPath} alt=""/>
                </div>

                <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Actividad creada</Modal.Title>
                </Modal.Header>
                    <Modal.Body>Tu actividad ya está creada y lista para recibir voluntarios!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>

            </Container>
        );
    }
}