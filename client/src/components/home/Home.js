import React from 'react';
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import SearchBar from '../searchBar/SearchBar';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import CategoryCard from "../categoryCard/CategoryCard";
import ActivitiesServices from "../../services/activities";
import './Home.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInUser: null,
            featuredCategories: []
          };
      
          this.activitiesServices = new ActivitiesServices();
    }

    componentDidMount = () => this.getAllActivities();
      
    getAllActivities = () => {
        if (this.state.featuredCategories.length === 0) {
        this.activitiesServices.getAllActivities()
            .then(allActivities => {
                let allCategories = [...new Set(allActivities.map(activity => JSON.stringify(activity.category)))].map(x => JSON.parse(x));
                let someCategories = ["social", "comunitario", "ambiental", "deportivo"];
                let featuredCategories = allCategories.filter(category => someCategories.includes(category.name));
                this.setState({ featuredCategories: featuredCategories })
            })
            .catch(err => console.log(err));
        }
    };

    render() {
        console.log(this.state);
        return(
            <div className="home">
                <section className="hero">
                    <div className="home-searchBar">
                        <SearchBar />
                    </div>
            
                    <Carousel className="home-carousel">
                        <Carousel.Item>
                            <img    
                                className="d-block w-100"
                                src="https://res.cloudinary.com/yelpcampagb/image/upload/v1584060008/ironhack-project3/ipdfcseopgfca6kcp6wn.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://res.cloudinary.com/yelpcampagb/image/upload/v1584059411/ironhack-project3/yeoece4davshjf1qga6h.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://res.cloudinary.com/yelpcampagb/image/upload/v1584060008/ironhack-project3/t7bl2g1efiz9d8gwtr49.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://res.cloudinary.com/yelpcampagb/image/upload/v1584059411/ironhack-project3/a8ic0tuxntk2furby3hz.jpg"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </section>

                <section className="featuredCategories">
                    {this.state.featuredCategories.length ? (
                        <>
                            <h1>Categorías destacadas</h1>
                            <div className="categoryList">
                                {this.state.featuredCategories.map((category, idx) => <CategoryCard key={idx} category={category} />)}
                            </div>
                            <Link to="/categories"><Button variant="outline-primary" size="lg">Ver todas las categorías</Button></Link>
                        </>
                    ) : (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Cargando...</span>
                        </Spinner>
                    )}
                </section>

                <section className="activitiesSection">
                    <div className="activities-container">
                        <div className="activities-image">
                            <img src="https://res.cloudinary.com/yelpcampagb/image/upload/v1584096845/ironhack-project3/dwvuai9izlivpm6hkozc.jpg" alt="activities section"/>
                        </div>
                        <div className="activities-quote">
                            <h1 className="quote1">Cambia tu vida</h1>
                            <h1 className="quote2">ayudando a los demás</h1>
                            <Link to="/activities"><Button variant="outline-primary" size="lg">Ver todas las actividades</Button></Link>
                        </div>
                    </div>
                </section>

                <section className="infoSection">
                    <img src="https://res.cloudinary.com/yelpcampagb/image/upload/v1583620107/ironhack-project3/inemcz4pjwjcfqppheev.png" alt="suma logo"/>
                    <div className="infoSection-text">
                        <h3>Encuentra actividades de voluntariado de manera sencilla</h3>
                        <h3>y empieza a colaborar en aquellas causas que te interesan</h3>
                        
                    </div>
                    <span className="horLine"></span>
                </section>
            </div>
        )
    }
}