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
                    <Card.Body>
                        <Card.Title>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Link to={`/categories/${category.name}`}><Button variant="primary">Ver actividades</Button></Link>
                    </Card.Body>
                </Card>
            </>
        );
    }
}