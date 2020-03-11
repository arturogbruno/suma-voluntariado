import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ActivitiesServices from '../../services/activities';
import ActivityOverview from '../activityOverview/ActivityOverview';


export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResult: []
        }

        this.activitiesServices = new ActivitiesServices();
    }

    componentDidMount = () => this.getSearchResults();


    getSearchResults = () => {
        if (this.state.searchResult.length === 0){
            this.activitiesServices.getActivitiesByTerm(this.props.match.params.searchTerm)
            .then(activities => {this.setState({ searchResult: activities })})
            .catch(err => console.log(err))
        }
    }

    render() {
        return (    
            <div>
                <h1>Resultados de la búsqueda</h1>
                {this.state.searchResult.length ? (
                    <div className="activitiesList">
                        {this.state.searchResult.map((activity, idx) => (
                            <ActivityOverview key={idx} activity={activity} />
                        ))}
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