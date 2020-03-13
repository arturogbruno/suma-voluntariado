import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CategoryCard.scss';

export default class CategoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let category = this.props.category;
        return (
            <>
                <Card className="categoryCard">
                    <Card.Img variant="top" src={category.imgPath} />
                    <Card.Body className="categoryCard-body">
                        <div className="categoryCard-text">
                            <Card.Title>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</Card.Title>
                            <Card.Text>{category.description}</Card.Text>
                        </div>
                        <div className="categoryCard-button">
                            <Link to={`/categories/${category.name}`}><Button variant="primary">Ver actividades</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </>
        );
    }
}