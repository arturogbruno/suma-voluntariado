import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "./ActivityOverview.scss";


export default class ActivityOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let activity = this.props.activity;
        return (
            <Container fluid className="activityOverview">
                <Row>
                    <Col lg={4} className="imageCol">
                        <img className="activityImage" src={activity.imgPath} alt={activity.title} />
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <h3>{activity.title}</h3>
                        </Row>
                        <Row>
                            <Col lg={7} className="secondCol">
                                <h6>Categoría: <Badge pill variant="info">{activity.category.name}</Badge></h6>
                                <h6>Fechas:</h6>
                                <ul>
                                    {activity.dates.map((date, idx) => <li key={idx}>{moment(date).format('DD/MM/YYYY')}</li>)}
                                </ul>
                                <h6>Plazas vacantes: {activity.maxParticipants - activity.participants.length}</h6>
                            </Col>
                            <Col lg={5} className="organizationCol">
                                <h6>Organización: <Link to={`/organizations/details/${activity.organization._id}`}>{activity.organization.name}</Link></h6>
                                <img src={activity.organization.imgPath} alt={`${activity.organization.name}`} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8} className="activityOverview-buttons">
                                <Link to={`/activities/details/${activity._id}`}><Button>Más info</Button></Link>
                                {this.props.clickToDelete ? (
                                    <Button variant="danger" onClick={() => this.props.clickToDelete(activity._id)}>Retirar participación</Button>
                                ) : (
                                    ""
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }  
}