import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import GoogleSearchBox from "../../components/googleSearchBox/googleSearchBox";
import ActivitiesServices from '../../services/activities';
import FilesServices from '../../services/files';

export default class EditActivityForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activity: {
                title: this.props.activity.title,
                description: this.props.activity.description,
                location: this.props.activity.location,
                coord: this.props.activity.coord,
                dates: this.props.activity.dates,
                time: this.props.activity.time,
                category: this.props.activity.category,
                minParticipants: this.props.activity.minParticipants,
                maxParticipants: this.props.activity.maxParticipants,
                requirements: this.props.activity.requirements,
                imgPath: this.props.activity.imgPath
            }
        }

        this.activitiesServices = new ActivitiesServices();
        this.filesServices = new FilesServices();
    }

    
    handleChange = e => {
        let { name, value } = e.target;
        this.setState({
            activity: { ...this.state.activity, [name]: value }
        })
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imgPath", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinary es: ', response.secure_url)
                this.setState({
                    activity: { ...this.state.activity, imgPath: response.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    updateStateWithLocation = dataFromChild => {
        this.setState({
            activity: {...this.state.activity, location: dataFromChild.location, coord: { lat: dataFromChild.coord.lat, lng: dataFromChild.coord.lng } } 
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.saveChanges();
    }

    saveChanges = () => {
        this.activitiesServices.updateActivity(this.props.activity._id, this.state.activity)
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
                    <Form.Group as={Col} xs={7}>
                        <Form.Label>Título:</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.activity.title} onChange={this.handleChange} placeholder="" required />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} xs={4}> 
                        <Form.Label>Categoría:</Form.Label>
                        <Form.Control as="select" name="category" value={this.state.activity.category.name} onChange={this.handleChange} required>
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
                        <Form.Control type="date" name="dates" value={this.state.activity.dates} onChange={this.handleChange} placeholder="" required />
                    </Form.Group>

                    <Form.Group as={Col} xs={4}>
                        <Form.Label>Hora:</Form.Label>
                        <Form.Control type="text" name="time" value={this.state.activity.time} onChange={this.handleChange} placeholder="10:00 h - 13:00 h" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} xs={6}>
                        <Form.Label>Descripción:</Form.Label>
                        <Form.Control as="textarea" rows="5" name="description" value={this.state.activity.description} onChange={this.handleChange} placeholder="Indica aquí la descripción de la actividad, en qué consiste y todos aquellos datos que sean de interés" required />
                    </Form.Group>

                    <Form.Group as={Col} xs={6}>
                        <Form.Label>Requerimientos:</Form.Label>
                        <Form.Control as="textarea" rows="5" name="requirements" value={this.state.activity.requirements} onChange={this.handleChange} placeholder="Indica aquí los requerimientos necesarios para poder ejercer como voluntario en esta actividad" required />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} xs={12}>
                        <Form.Label>Ubicación:</Form.Label>
                        <GoogleSearchBox selectLocation={(dataFromChild) => this.updateStateWithLocation(dataFromChild)}></GoogleSearchBox>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} xs={3}>
                        <Form.Label>Número mínimo de participantes:</Form.Label>
                        <Form.Control type="number" min="1" max="100" name="minParticipants" value={this.state.activity.minParticipants} onChange={this.handleChange} required />
                    </Form.Group>

                    <Form.Group as={Col} xs={3}>
                        <Form.Label>Número máximo de participantes:</Form.Label>
                        <Form.Control type="number" min="1" max="100" name="maxParticipants" value={this.state.activity.maxParticipants} onChange={this.handleChange} required />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Imagen de la actividad:</Form.Label>
                        <Form.Control type="file" name="imgPath" onChange={this.handleFileUpload} />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">Guardar cambios</Button>
            </Form>
        )
    }
}
