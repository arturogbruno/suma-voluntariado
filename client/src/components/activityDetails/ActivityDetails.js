import React from "react";
import moment, { relativeTimeThreshold } from "moment";
import { Link, Redirect } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ActivitiesServices from "../../services/activities";
import UsersServices from "../../services/users";
import Map from "../map/Map";
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

    componentDidMount = () => {
        this.getSpecificActivity();
    }

    getSpecificActivity = () => {
        if (!this.state.specificActivity) {
            this.activitiesServices.getActivityDetails(this.props.match.params.id)
                .then(specificActivity => this.setState({ specificActivity: specificActivity }, () => {
                    this.userIsParticipant();
                    this.activityIsFav();
                }))
                .catch(err => console.log(err))
        }
    }

    userIsParticipant = () => {
        let alreadyParticipant = this.state.specificActivity.participants.find(participant => participant._id === this.props.loggedInUser._id);
        let userIsParticipant = false;
        alreadyParticipant !== undefined ? userIsParticipant = true : userIsParticipant = false;
        this.setState({ userIsParticipant: userIsParticipant })
    }

    activityIsFav = () => {
        let alreadyFav = this.props.loggedInUser.favActivities.find(activity => activity === this.state.specificActivity._id);
        let activityIsFav = false;
        alreadyFav !== undefined ? activityIsFav = true : activityIsFav = false;
        this.setState({ activityIsFav: activityIsFav })
    }

    addActivityToFav = () => {
        this.usersServices.updateUserFav(this.props.loggedInUser._id, { favActivities: this.state.specificActivity._id })
        .then(() => this.setState({ activityIsFav: true }))
        .catch(err => console.log(err))
    }

    addParticipant = () => {
        this.activitiesServices.addParticipant(this.state.specificActivity._id, { newParticipant: this.props.loggedInUser._id })
        .then(updatedActivity => this.setState({ specificActivity: updatedActivity, userIsParticipant: true }))
        .catch(err => console.log(err))
    }

    render() {
        let activity = this.state.specificActivity;
        return (    
            <div>
                {this.props.loggedInUser ? (
                    this.state.specificActivity ? (
                        <Container className="activityDetails">
                            <Row className="activityDetails-mainInfo">
                                <Col xs={8} className="leftSide">
                                    <h1>{this.state.specificActivity.title}</h1>
                                    <h5 className="activityDetails-category">Categoría: <Badge pill variant="info">{activity.category.name}</Badge></h5>
                                    <div className="activityDetails-activityImg">
                                        <img src={activity.imgPath} alt="imagen de la actividad" className="activityDetails-img"/>
                                    </div>
                                    <h5>Descripción de la actividad:</h5>
                                    <p>{activity.description}</p>
                                    <h5>Requerimientos:</h5>
                                    <p>{activity.requirements}</p>
                                </Col>
                                <Col className="rightSide">
                                    <img src={activity.organization.imgPath} alt={`logo de ${activity.organization.name}`} className="activityDetails-logo"/>
                                    <div>
                                        <h5 className="activityDetails-organization"><strong>{activity.organization.name}</strong></h5>
                                        <h5>Fechas y horas de la actividad:</h5>
                                        <ul>
                                            {activity.dates.map((date, idx)=> <li key={idx}>{moment(date).format('DD/MM/YYYY')} - {activity.time}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Mín. participantes: {activity.minParticipants}</h5>
                                        <h5>Máx. participantes: {activity.maxParticipants}</h5>
                                        <h5>Plazas vacantes: {activity.maxParticipants - activity.participants.length}</h5>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row className="activityDetails-buttons">
                                <Col xs={1}>
                                {this.state.activityIsFav ? (
                                    <button variant="light" className={`activityDetails-addFavButton ${this.state.activityIsFav ? 'disabled' : ''}`} onClick={this.addActivityToFav} disabled>♥</button>
                                ) : (
                                    <button className="activityDetails-addFavButton" onClick={this.addActivityToFav}>♡</button>
                                )}
                                </Col>
                                <Col>
                                {this.state.userIsParticipant ? (
                                    <span className="activityDetails-alreadyParticipant">Estás apuntado a esta actividad</span>
                                ) : (
                                    <Button onClick={this.addParticipant}>¡Me apunto!</Button>
                                )}
                                </Col>
                                <Col xs={4} className="activityDetails-share">
                                    <h6>Compártelo:</h6>
                                    <span><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Flocalhost%3A3000%2Factivities%2F5e6401261068a419c58a5fc7&layout=button&size=large&width=103&height=28&appId" width="103" height="28" style={{border:'none',overflow:'hidden'}} scrolling="no" allow="encrypted-media"></iframe></span>
                                    
                                    <span><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-lang="es" data-show-count="false"><img src="https://res.cloudinary.com/yelpcampagb/image/upload/v1583674364/ironhack-project3/ery9xhqd2w0efipacfkw.png" alt="twiteer button"/></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></span>
                                </Col>
                            </Row>
                            
                            <Row className="activityDetails-participants">
                                <Col>
                                    <h6>Participantes:</h6>
                                    {activity.participants.map((participant, idx) => (
                                        <Link to={`/users/${participant._id}`} className="activityDetails-partipant" key={idx}><img src={participant.imgPath} alt="user image"/>{participant.username}</Link>
                                    ))}
                                </Col>
                            </Row>
                            <Row className="activityDetails-map">
                                <Col>
                                    <h5><strong>Lugar:</strong> {activity.location}</h5>
                                    <Map
                                        google={this.props.google}
                                        center={{lat: activity.coord.lat, lng: activity.coord.lng}}
                                        height='300px'
                                        zoom={15}
                                    />
                                </Col>
                            </Row>
                        </Container>  
                    ) : (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Cargando...</span>
                        </Spinner>
                    )
                ) : (
                    <Redirect to="/login"></Redirect>
                )}
            </div>
        );
    }
}