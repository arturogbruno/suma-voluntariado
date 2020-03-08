import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ActivitiesServices from "../../services/activities";
import UsersServices from "../../services/users";
import './ActivityDetails.scss';

export default class ActivityDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            specificActivity: null
        }
        
        this.activitiesServices = new ActivitiesServices();
        this.usersServices = new UsersServices();
    }

    getSpecificActivity = () => {
        if (!this.state.specificActivity) {
            this.activitiesServices.getActivityDetails(this.props.match.params.id)
                .then(specificActivity => this.setState({ specificActivity: specificActivity }))
                .catch(err => console.log(err))
        }
    }

    addActivityToFav = () => {
        this.usersServices.updateUser(this.props.loggedInUser._id, {favActivities: this.state.specificActivity._id})
        .then(updatedUser => console.log(updatedUser))
        .catch(err => console.log(err))
    }

    addParticipant = () => {
        this.activitiesServices.updateActivity(this.state.specificActivity._id, {participants: this.props.loggedInUser._id})
        .then(updatedActivity => this.setState({ specificActivity: updatedActivity }))
        .catch(err => console.log(err))
    }

    componentDidMount = () => {this.getSpecificActivity()}

    render() {
        let activity = this.state.specificActivity;
        console.log(activity)
        return (    
            <div>
                {this.state.specificActivity ? (
                    <Container className="activityDetails">
                    <Row className="activityDetails-mainInfo">
                        <Col xs={8} className="leftSide">
                            <h1>{this.state.specificActivity.title}</h1>
                            <div className="activityDetails-activityImg">
                                <img src={activity.imgPath} alt="imagen de la actividad" className="activityDetails-img"/>
                            </div>
                            <h6>Categoría: {activity.category.name}</h6>
                            <h6>Organización: {activity.organization.name}</h6>
                            <h6>Descripción de la actividad:</h6>
                            <p>{activity.description}</p>
                            <h6>Requerimientos:</h6>
                            <p>{activity.requirements}</p>
                        </Col>
                        <Col className="rightSide">
                            <img src={activity.organization.imgPath} alt={`logo de ${activity.organization.name}`} className="activityDetails-logo"/>
                            <div>
                                <h6>Fechas y horas:</h6>
                                <ul>
                                    {activity.dates.map((date, idx)=> <li key={idx}>{moment(date).format('DD/MM/YYYY')} - {activity.time}</li>)}
                                </ul>
                                <h6>Lugar: {activity.location}</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className="activityDetails-buttons">
                        <Col>
                            <Button onClick={this.addActivityToFav}>♥️</Button>
                        </Col>
                        <Col>
                            <Button onClick={this.addParticipant}>¡Me apunto!</Button>
                        </Col>
                        <Col className="activityDetails-share">
                            <h6>Compártelo:</h6>
                            <span><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Flocalhost%3A3000%2Factivities%2F5e6401261068a419c58a5fc7&layout=button&size=large&width=103&height=28&appId" width="103" height="28" style={{border:'none',overflow:'hidden'}} scrolling="no" allow="encrypted-media"></iframe></span>
                            
                            <span><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-lang="es" data-show-count="false"><img src="https://res.cloudinary.com/yelpcampagb/image/upload/v1583674364/ironhack-project3/ery9xhqd2w0efipacfkw.png" alt="twiteer button"/></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></span>
                        </Col>
                    </Row>
                    <Row className="activityDetails-secondaryInfo">
                        <Col>
                            <h6>Mín. participantes: {activity.minParticipants}</h6>
                        </Col>
                        <Col>
                            <h6>Máx. participantes: {activity.maxParticipants}</h6>
                        </Col>
                        <Col>
                            <h6>Plazas vancantes: {activity.maxParticipants - activity.participants.length}</h6>
                        </Col>
                    </Row>
                    <Row className="activityDetails-participants">
                        <Col>
                            <h6>Participantes:</h6>
                            {activity.participants.map((participant, idx) => (
                                <span className="activityDetails-partipantAvatar" key={idx}><img src={participant.imgPath} alt="user image"/>{participant.username}</span>
                            ))}
                        </Col>
                    </Row>
                    <Row className="activityDetails-imageAndMap">
                        <Col>
                            <h2>Mapa de google</h2>
                        </Col>
                    </Row>

                    </Container>               
                ) : (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Cargando...</span>
                    </Spinner>
                )}
            </div>
        );
    }
}