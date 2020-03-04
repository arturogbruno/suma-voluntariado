import React from 'react';
import { Link } from 'react-router-dom';
import ActivitiesServices from '../../services/activities';


export default class Home extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loggedInUser: null,
        allActivities: []
      };
  
      this.activitiesServices = new ActivitiesServices();
    }

    getAllActivities = () => {
        this.activitiesServices.getAllActivities()
            .then(allActivities => this.setState({ allActivities: allActivities.allActivities }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.getAllActivities();

    render() {
        return(
            <div>
                <h1>Estás en la Home</h1>
                {this.state.allActivities.length ? (
                    <ul>
                        {this.state.allActivities.map(activity => <li><Link to={`/activities/${activity._id}`} key={activity._id}>{activity.title}</Link></li>)}
                    </ul>
                )
                    :
                    <p>CARGANDO...</p>
                }
            </div>
        )
    }

}