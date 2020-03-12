import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import OrganizationDetails from '../organizationDetails/OrganizationDetails';
import EditOrganizationForm from '../editOrganizationForm/EditOrganizationForm';
import ActivityControlView from '../activityControlView/ActivityControlView';
import OrganizationsServices from "../../services/organizations";
import ActivitiesServices from "../../services/activities";
import './ControlPanel.scss';


export default class ControlPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            organization: null,
            activities: [],
            showModal: false
        }

        this.activitiesServices = new ActivitiesServices();
        this.organizationsServices = new OrganizationsServices();
    }

    componentDidMount = () => this.getOrganization();

    getOrganization = () => {
        this.organizationsServices.getOrganizationByUser(this.props.loggedInUser._id)
        .then(organization => {
            this.setState({ organization: organization[0] }, () => this.getActivitiesByOrganization())
        })
        .catch(err => console.log(err));
    }

    getActivitiesByOrganization = () => {
        this.activitiesServices.getActivitiesByOrganization(this.state.organization._id)
        .then(foundActivities => this.setState({ activities: foundActivities }))
        .catch(err => console.log(err))
    }

    deleteActivity(activityId) {
        this.activitiesServices.deleteActivity(activityId)
        .then(() => this.getActivitiesByOrganization())
        .catch(err => console.log(err))
    }

    openModal = () => this.setState({ showModal: true });

    closeModal = () => this.setState({ showModal: false });
    

    render() {
        return(
            <div className="controlPanel">
                <Tab.Container id="left-tabs-example" defaultActiveKey="organizationProfile">
                    <Row>
                        <Col sm={2} className="controlPanel-menu">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <h5>Panel de control</h5>
                                    <Nav.Link eventKey="organizationProfile">Perfil de la organización</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="activitiesManagement">Gestión de actividades</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col>
                            {this.state.organization ? (
                                <Tab.Content className="controlPanel-mainContent">
                                    <Tab.Pane eventKey="organizationProfile">
                                        <div className="organizationProfile">
                                            <h3>Perfil de la organización</h3>
                                            <OrganizationDetails key={Math.random() * 100000} organization={this.state.organization} loggedInUser={this.props.loggedInUser}></OrganizationDetails>
                                            <Button variant="warning" onClick={this.openModal}>Editar datos</Button>
                                        </div>

                                        <Modal size="lg" show={this.state.showModal} onHide={this.closeModal}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Editar perfil de la organización</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <EditOrganizationForm organization={this.state.organization} closeModal={this.closeModal} refreshList={this.getOrganization} />
                                            </Modal.Body>
                                        </Modal>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="activitiesManagement">
                                        <div className="activitiesManagement">
                                            <h3>Gestión de actividades</h3>
                                            {this.state.activities.length ? (
                                                this.state.activities.map((activity, idx) => <ActivityControlView key={idx} activity={activity} onDeleteClick={activityId => this.deleteActivity(activityId)}/>)
                                            ) : (
                                                <h5>Esta organización aún no ha dado de alta actividades.</h5>
                                            )}
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            ) : (
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Cargando...</span>
                                </Spinner>
                            )}
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}
