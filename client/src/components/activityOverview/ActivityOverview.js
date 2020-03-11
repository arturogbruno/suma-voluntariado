import React from "react";
import { Link } from "react-router-dom";
import moment, { relativeTimeThreshold } from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "./ActivityOverview.scss";


export default class ActivityOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let activity = this.props.activity;
        return (
            <Container fluid className="activityOverview">
                <Row>
                    <Col lg={4} className="imageCol">
                        <img className="activityImage" src={activity.imgPath} alt={`${activity.title} image`} />
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <h3>{activity.title}</h3>
                        </Row>
                        <Row>
                            <Col lg={7}>
                                <h6>Categoría: <Badge pill variant="info">{activity.category.name}</Badge></h6>
                                <h6>Fechas:</h6>
                                {activity.dates.map((date, idx) => <li key={idx}>{moment(date).format('DD/MM/YYYY')}</li>)}
                                <h6>Plazas vacantes: {activity.maxParticipants - activity.participants.length}</h6>
                            </Col>
                            <Col lg={5} className="organizationCol">
                                <h6>Organización: {activity.organization.name}</h6>
                                <img src={activity.organization.imgPath} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8}>
                                <Link to={`/activities/details/${activity._id}`}><Button>Ver detalle</Button></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}