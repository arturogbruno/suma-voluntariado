import React from 'react';
import ActivitiesServices from '../../services/activities';

export default class Home extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loggedInUser: null
      };
  
      this.activitiesServices = new ActivitiesServices();
    }

    componentDidMount = () => this.getAllActivities();

    getAllActivities = () => {
        this.activitiesServices.getAllActivities()
            .then(allActivities => this.setState({ activities: allActivities }))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <h1>Estás en la Home</h1>
        )
    }

}