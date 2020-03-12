import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ActivitiesServices from "../../services/activities";
import './ActivityControlView.scss';


export default class ActivityControlView extends React.Component {
    constructor(props) {
        super(props);

        this.activitiesServices = new ActivitiesServices();
    }

    render() {
        let activity = this.props.activity;
        return (
            <Container fluid className="activityControlView">
                <Row className="activityControlView-mainInfo">
                    <Col lg={8}>
                        <h6>Título: {activity.title}</h6>
                        <h6>Categoría: <Badge pill variant="info">{activity.category.name}</Badge></h6>
                        <h6>Lugar: {activity.location}</h6>
                    </Col>
                    <Col lg={4}>
                        <h6>Fechas:</h6>
                        {activity.dates.map((date, idx) => <li key={idx}>{moment(date).format('DD/MM/YYYY')}</li>)}
                    </Col>
                </Row>

                <Row className="activityControlView-participants">
                    <Col lg={8}>
                        <h5>Voluntarios:</h5>
                        {activity.participants.map((participant, idx) => <Link to={`/users/${participant._id}`} className="participant" key={idx}><img src={participant.imgPath} alt={`${participant.name}`}/>{participant.username}</Link>)}
                    </Col>
                    <Col lg={4}>
                        <h5>Apuntados: {activity.participants.length} de {activity.maxParticipants}</h5>
                    </Col>
                </Row>
                
                <Row className="activityControlView-buttons">
                    <Button variant="warning" onClick={() => this.props.onEditClick(this.props.activityIdx)}>Editar actividad</Button>
                    <Button variant="danger" onClick={() => this.props.onDeleteClick(activity._id)}>Eliminar actividad</Button>
                </Row>
            </Container>
        )
    }  
}