import React from 'react';
import ActivitiesServices from '../../services/activities';


export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResult: []
        }

        this.activitiesServices = new ActivitiesServices();
    }

    componentDidMount = () => { this.getSearchResults() };


    getSearchResults = () => {
        console.log(this.props)
        if (this.state.searchResult.length === 0){
            this.activitiesServices.getActivitiesByTerm(this.props.match.params.searchTerm)
            .then(activities => {this.setState({ searchResult: activities })})
            .catch(err => console.log(err))
        }
    }

    render() {
        // console.log(this.state);
        if(this.state.searchResult){
            return(
                <div>
                    {this.state.searchResult.map(activity => (
                        <h1>Holi</h1>
                    ))}
                </div>
            )
        }else{
            return <h1>Buscando...</h1>
        }
      
    }
}