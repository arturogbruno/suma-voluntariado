import React from "react";
import { Link, Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OrganizationsServices from "../../services/organizations";
import './OrganizationDetails.scss';

export default class OrganizationDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            organization: null
        }

        this.organizationsServices = new OrganizationsServices();
    }

    componentDidMount = () => this.getOrganization();

    getOrganization = () => {
        this.organizationsServices.getOrganizationDetails(this.props.match.params.id)
            .then(organization => {
                this.setState({ organization: organization })
            })
            .catch(err => console.log(err));
    }

    render() {
        let organization = this.state.organization;
        return(
            <div>
                {this.props.loggedInUser ? (
                    this.state.organization ? (
                        <Container className="organizationDetails">
                            <Row className="mainInfo">
                                <Col xs={8}>
                                    <h1>{organization.name}</h1>
                                    <p>{organization.description}</p>
                                </Col>
                                <Col>
                                    <div className="organizationDetails-logo">
                                        <img src={organization.imgPath} alt={organization.name}/>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="contactInfo">
                                <Col>
                                    <h4>Información de contacto:</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5}>
                                    <h5>Dirección:</h5>
                                    <p>{organization.address}</p>
                                </Col>
                                <Col xs={2}>
                                    <h5>Teléfono:</h5>
                                    <p>{organization.phone}</p>
                                </Col>
                                <Col>
                                    <h5>Email:</h5>
                                    <a href={`mailto:${organization.email}`}>{organization.email}</a>
                                </Col>
                                <Col>
                                    <h5>Página web:</h5>
                                    <a href={organization.webpage} target="_blank">{organization.webpage}</a>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Cargando...</span>
                        </Spinner>
                    )
                ) : (
                    <Redirect to="/login"></Redirect>
                )}
            </div>
        )
    }
}