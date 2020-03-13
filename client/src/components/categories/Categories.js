import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import ActivitiesServices from "../../services/activities";
import CategoryCard from "../categoryCard/CategoryCard";
import "./Categories.scss";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: null,
      allActivities: [],
      allCategories: []
    };

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
  };

  render() {
    return (
      <Container>
        <h1 className="categories-title">Voluntariado por categorías</h1>
        {this.state.allCategories.length ? (
          <div className="categoryList">
            {this.state.allCategories.map((category, idx) => <CategoryCard key={idx} category={category} />)}
          </div>
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Cargando...</span>
          </Spinner>
        )}
      </Container>
    );
  }
}