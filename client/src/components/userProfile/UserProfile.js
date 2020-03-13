import React from "react";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActivityOverview from '../activityOverview/ActivityOverview';
import UsersServices from "../../services/users";
import ActivitiesServices from "../../services/activities";
import './UserProfile.scss';



export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            isOwner: false,
            activities: []
        }

        this.usersServices = new UsersServices();
        this.activitiesServices = new ActivitiesServices();
    }

    componentDidMount = () => this.getUserInfo();

    getUserInfo = () => {
        this.usersServices.getUserDetails(this.props.match.params.id)
        .then(user => this.setState({ user: user }, () => {
            this.checkOwner();
            this.getActivitiesWhereUserIsParticipant();
        }))
        .catch(err => console.log(err))
    }

    checkOwner = () => {
        if(this.props.loggedInUser._id === this.state.user._id) {
            this.setState({ isOwner: true })
        } else {
            this.setState({ isOwner: false })
        }
    }

    getActivitiesWhereUserIsParticipant = () => {
        this.activitiesServices.getActivitiesByParticipant(this.state.user._id)
        .then(activities => {
            this.setState({ activities: activities })
        })
        .catch(err => console.log(err))
    }

    deleteParticipation = (activityId) => {
        this.activitiesServices.deleteParticipant(activityId, { participant: this.props.loggedInUser._id })
        .then(() => this.getActivitiesWhereUserIsParticipant())
        .catch(err => console.log(err))
    }

    render() {
        let activities = this.state.activities;
        let owner = this.state.isOwner;
        let user = this.state.user;
        let role = "";
        if(user) {
            role = user.role === 'volunteer' ? 'voluntario' : 'organización';
        }
        return (
            <div className="userProfile">
                {this.props.loggedInUser ? (
                    this.state.user ? (
                        <div>
                            <Row>
                                <Col lg={3} className="userInfo">
                                    <img src={user.imgPath} alt={user.username} />
                                    <div>
                                        <h5>Usuario: {user.username}</h5>
                                        <h5>Rol: {role}</h5>
                                        <h5>Email: <a href={`mailto:${user.email}`}>{user.email}</a></h5>
                                    </div>
                                    {owner ? (
                                        <Button variant="warning">Editar datos</Button>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                                {this.props.loggedInUser ? (
                                    <Col>
                                        <Row>
                                            {this.state.activities.length ? (
                                                <>
                                                    <h4>{`Actividades a las que está apuntado ${user.username}:`}</h4>
                                                    {activities.map((activity, idx) => <ActivityOverview key={idx} activity={activity} clickToDelete={(activityId) => this.deleteParticipation(activityId)} />)}
                                                </>
                                            ) : (
                                                <h4>{`${user.username} no está apuntado a ninguna actividad en este momento.`}</h4>
                                            )}
                                        </Row>
                                        <Row>
                                            {this.state.user.favActivities.length > 0 ? (
                                                <>
                                                    <h4>{`Actividades favoritas de ${user.username}:`}</h4>
                                                    {user.favActivities.map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)}
                                                </>
                                            ) : (
                                                <h4>{`${user.username} no tiene ninguna actividad favorita`}.</h4>
                                            )}
                                        </Row>
                                    </Col>
                                ) : (
                                    ""
                                )}
                            </Row>
                        </div>
                    ) : (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Cargando...</span>
                        </Spinner>
                    )
                ) : (
                    <Redirect to="/login"></Redirect>
                )}
            </div>
        )
    }
}