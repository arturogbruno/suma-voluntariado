import axios from 'axios';

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/organizations`,
            withCredentials: true
        })
    }

    getAllOrganizations = () => this.service.get('/all').then(response => response.data);

    getOrganizationDetails = id => this.service.get(`/${id}`).then(response => response.data);
    
    createOrganization = newOrganization => this.service.post('/new', newOrganization).then(response => response.data);
}