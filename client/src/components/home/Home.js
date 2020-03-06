import React from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import ActivitiesServices from "../../services/activities";
import CategoryCard from "../categoryCard/CategoryCard";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: null,
      allActivities: [],
      allCategories: []
    };

    this.activitiesServices = new ActivitiesServices();
  }

  getAllActivities = () => {
    if (this.state.allActivities.length === 0) {
      this.activitiesServices.getAllActivities()
        .then(allActivities => {
          let allCategories = [...new Set(allActivities.map(activity => activity.category))]
          this.setState({ allActivities: allActivities, allCategories: allCategories })
        })
        .catch(err => console.log(err));
    }
  };

  componentDidMount = () => {this.getAllActivities()}

  render() {
    return (
      <div>
        <h1>Estás en la Home</h1>
        {this.state.allCategories.length ? (
          <div>
            {this.state.allCategories.map(category => <CategoryCard category={category}> </CategoryCard>)}
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