import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import moment from "moment";
import ActivitiesServices from "../../services/activities";
import ActivityOverview from '../activityOverview/ActivityOverview';
import './ActivitiesByCategory.scss';


export default class Activities extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: [],
            selectedDate: ""
        }

        this.activitiesServices = new ActivitiesServices();
    }

    getActivitiesByCategory = () => {
        if (this.state.activities.length === 0) {
            this.activitiesServices.getActivitiesByCategory(this.props.match.params.name)
                .then(activities => this.setState({ activities: activities }))
                .catch(err => console.log(err))
        }
    }

    handleDateFilter = (e) => {
        let selectedDate = e.target.value;
        this.setState({ selectedDate: selectedDate });
    } 

    componentDidMount = () => this.getActivitiesByCategory();

    render() {
        let categoryName = this.props.match.params.name;
        return (    
            <div className="activitiesByCategory">
                <h1 className="activitiesByCategory-title">Actividades por categoría: {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
                {this.state.activities.length ? (
                    <div className="activitiesList">
                        <Row>
                            <Col lg={2}>
                                <div className="filterCol">
                                    <h5>Filtro de actividades:</h5>
                                    <Form.Group>
                                        <Form.Label>Fecha:</Form.Label>
                                        <Form.Control type="date" onChange={this.handleDateFilter}/>
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col>
                                {this.state.selectedDate ? (
                                    this.state.activities.filter(activity => activity.dates.map(date => moment(date).format('YYYY-MM-DD')).includes(this.state.selectedDate)).map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)
                                ) : (
                                    this.state.activities.map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)
                                )}
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Cargando...</span>
                    </Spinner>
                )}
            </div>
        );
    }
}