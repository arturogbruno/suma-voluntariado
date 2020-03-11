import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import moment, { relativeTimeThreshold } from "moment";
import ActivitiesServices from '../../services/activities';
import ActivityOverview from '../activityOverview/ActivityOverview';


export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            foundActivities: [],
            allCategories: [],
            filteredActivities: [],
            filteredCategories: [],
            selectedDate: ""
        }

        this.activitiesServices = new ActivitiesServices();
    }

    componentDidMount = () => this.getSearchResults();

    getSearchResults = () => {
        if (this.state.foundActivities.length === 0){
            this.activitiesServices.getActivitiesByTerm(this.props.match.params.searchTerm)
                .then(foundActivities => {
                let allCategories = [...new Set(foundActivities.map(activity => JSON.stringify(activity.category)))].map(x => JSON.parse(x));
                this.setState({ foundActivities: foundActivities, allCategories: allCategories })
                })
                .catch(err => console.log(err));
        }
    }

    handleCategoryFilter = (e) => {
        let category = e.target.id;
        let newFilter = [...this.state.filteredCategories];
        let categoryIndex = this.state.filteredCategories.indexOf(category);
        if(categoryIndex > -1) {
            newFilter.splice(categoryIndex, 1);
        } else {
            newFilter.push(category);
        }
        this.setState({ filteredCategories: newFilter })
    }

    handleDateFilter = (e) => {
        let selectedDate = e.target.value;
        this.setState({ selectedDate: selectedDate });
    }

    render() {
        return (    
            <div>
                <h1>Resultados de la búsqueda</h1>
                {this.state.foundActivities.length ? (
                    <Container fluid className="activitiesList">
                        <Row>
                            <Col md={2}>
                                <h5>Filtro de actividades:</h5>
                                <Form.Group>
                                    <Form.Label>Fecha:</Form.Label>
                                    <Form.Control type="date" onChange={this.handleDateFilter}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Categoría:</Form.Label>
                                    {this.state.allCategories.map((category, idx) => (
                                        <Form.Check key={idx} type="checkbox" name="category" id={category.name} label={category.name} onChange={this.handleCategoryFilter}/>
                                    ))}
                                </Form.Group>
                            </Col>
                            <Col>
                                {this.state.selectedDate ? (
                                    this.state.filteredCategories.length ? (
                                        this.state.foundActivities.filter(activity => activity.dates.map(date => moment(date).format('YYYY-MM-DD')).includes(this.state.selectedDate)).filter(activityFilteredByDate => this.state.filteredCategories.includes(activityFilteredByDate.category.name)).map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)
                                    ) : (
                                        this.state.foundActivities.filter(activity => activity.dates.map(date => moment(date).format('YYYY-MM-DD')).includes(this.state.selectedDate)).map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)
                                    )
                                ) : (
                                    this.state.filteredCategories.length ? (
                                        this.state.foundActivities.filter(activity => this.state.filteredCategories.includes(activity.category.name)).map((activity, idx) => <ActivityOverview key={idx} activity={activity} />) 
                                    ) : (
                                        this.state.foundActivities.map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)
                                    )   
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