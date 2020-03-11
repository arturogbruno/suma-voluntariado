import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import moment from "moment";
import ActivitiesServices from "../../services/activities";
import ActivityOverview from '../activityOverview/ActivityOverview';


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
            <div>
                <h1>Actividades por categoría: {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
                {this.state.activities.length ? (
                    <Container fluid className="activitiesList">
                        <Row>
                            <Col md={2}>
                                <h5>Filtro de actividades:</h5>
                                <Form.Group>
                                    <Form.Label>Fecha:</Form.Label>
                                    <Form.Control type="date" onChange={this.handleDateFilter}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                {this.state.selectedDate ? (
                                    this.state.activities.filter(activity => activity.dates.map(date => moment(date).format('YYYY-MM-DD')).includes(this.state.selectedDate)).map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)
                                ) : (
                                    <div className="activitiesList">
                                        {this.state.activities.map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)}
                                    </div>
                                )}
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