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
import EditActivityForm from '../editActivityForm/EditActivityForm';
import OrganizationsServices from "../../services/organizations";
import ActivitiesServices from "../../services/activities";
import './ControlPanel.scss';


export default class ControlPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasOrganization: false,
            organization: null,
            activities: [],
            activityToEdit: null,
            showOrganizationModal: false,
            showActivityModal: false
        }

        this.activitiesServices = new ActivitiesServices();
        this.organizationsServices = new OrganizationsServices();
    }

    componentDidMount = () => this.getOrganization();

    getOrganization = () => {
        this.organizationsServices.getOrganizationByUser(this.props.loggedInUser._id)
        .then(organization => {
            if(organization.length) {
                this.setState({ hasOrganization: true, organization: organization[0] }, () => this.getActivitiesByOrganization())
            }
        })
        .catch(err => console.log(err));
    }

    getActivitiesByOrganization = () => {
        this.activitiesServices.getActivitiesByOrganization(this.state.organization._id)
        .then(foundActivities => this.setState({ activities: foundActivities }))
        .catch(err => console.log(err))
    }

    getActivityToEdit = (activityIdx) => {
        const [activityToEdit] = this.state.activities.slice(activityIdx, activityIdx + 1);
        this.setState({ activityToEdit: activityToEdit }, () => this.openActivityModal());
    }

    deleteActivity(activityId) {
        this.activitiesServices.deleteActivity(activityId)
        .then(() => this.getActivitiesByOrganization())
        .catch(err => console.log(err))
    }

    openOrganizationModal = () => this.setState({ showOrganizationModal: true });
    closeOrganizationModal = () => this.setState({ showOrganizationModal: false });

    openActivityModal = () => this.setState({ showActivityModal: true });
    closeActivityModal = () => this.setState({ showActivityModal: false });

    

    render() {
        return(
            this.state.hasOrganization ? (
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
                                                <Button variant="warning" onClick={this.openOrganizationModal}>Editar datos</Button>
                                            </div>

                                            <Modal size="lg" show={this.state.showOrganizationModal} onHide={this.closeOrganizationModal}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Editar perfil de la organización</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <EditOrganizationForm organization={this.state.organization} closeModal={this.closeOrganizationModal} refreshData={this.getOrganization} />
                                                </Modal.Body>
                                            </Modal>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="activitiesManagement">
                                            <div className="activitiesManagement">
                                                <h3>Gestión de actividades</h3>
                                                {this.state.activities.length ? (
                                                    this.state.activities.map((activity, idx) => <ActivityControlView key={idx} activityIdx={idx} activity={activity} onEditClick={(idx) => this.getActivityToEdit(idx)} onDeleteClick={activityId => this.deleteActivity(activityId)}/>)
                                                ) : (
                                                    <h5>Esta organización aún no ha dado de alta actividades.</h5>
                                                )}
                                            </div>

                                            <Modal size="lg" show={this.state.showActivityModal} onHide={this.closeActivityModal}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Editar actividad</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <EditActivityForm activity={this.state.activityToEdit} closeModal={this.closeActivityModal} refreshData={this.getActivitiesByOrganization} />
                                                </Modal.Body>
                                            </Modal>
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
            ) : (
                <div className="controlPanel">
                    <h2>Para poder acceder al Panel de Control, por favor crea una organización.</h2>
                </div>
            )
            
        )
    }
}
