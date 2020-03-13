import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import SearchBar from '../searchBar/SearchBar';
import './Home.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
            </div>
        )
    }
}