import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import ActivitiesServices from "../../services/activities";
import ActivityOverview from '../activityOverview/ActivityOverview';


export default class Activities extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: []
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

    componentDidMount = () => this.getActivitiesByCategory();

    render() {
        let categoryName = this.props.match.params.name;
        return (    
            <div>
                <h1>Actividades por categoría: {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
                {this.state.activities.length ? (
                    <div className="activitiesList">
                        {this.state.activities.map((activity, idx) => <ActivityOverview key={idx} activity={activity} />)}
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