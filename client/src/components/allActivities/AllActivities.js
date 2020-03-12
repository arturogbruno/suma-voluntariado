import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import moment from "moment";
import ActivitiesServices from "../../services/activities";
import ActivityOverview from '../activityOverview/ActivityOverview';
import './AllActivities.scss';


export default class AllActivities extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allActivities: [],
            allCategories: [],
            filteredActivities: [],
            filteredCategories: [],
            selectedDate: ""
        }

        this.activitiesServices = new ActivitiesServices();
    }

    componentDidMount = () => this.getAllActivities();

    getAllActivities = () => {
        if (this.state.allActivities.length === 0) {
            this.activitiesServices.getAllActivities()
                .then(allActivities => {
                let allCategories = [...new Set(allActivities.map(activity => JSON.stringify(activity.category)))].map(x => JSON.parse(x));
                this.setState({ allActivities: allActivities, allCategories: allCategories })
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
            <div className="allActivities">
                <h1 className="allActivities-title">Todas nuestras actividades</h1>
                {this.state.allActivities.length ? (
                    <div className="activitiesList">
                        <Row>
                            <Col lg={2}>
                                <div className="filterCol">
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
                                </div>
                            </Col>
                            <Col>
                                {this.state.selectedDate ? (
                                    this.state.filteredCategories.length ? (
                                        this.state.allActivities.filter(activity => activity.dates.map(date => moment(date).format('YYYY-MM-DD')).includes(this.state.selectedDate)).filter(activityFilteredByDate => this.state.filteredCategories.includes(activityFilteredByDate.category.name)).map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)
                                    ) : (
                                        this.state.allActivities.filter(activity => activity.dates.map(date => moment(date).format('YYYY-MM-DD')).includes(this.state.selectedDate)).map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)
                                    )
                                ) : (
                                    this.state.filteredCategories.length ? (
                                        this.state.allActivities.filter(activity => this.state.filteredCategories.includes(activity.category.name)).map((activity, idx) => <ActivityOverview key={idx} activity={activity} />) 
                                    ) : (
                                        this.state.allActivities.map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)
                                    )   
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
