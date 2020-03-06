import axios from 'axios';

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/activities`,
            withCredentials: true
        })
    }

    getAllActivities = () => this.service.get('/all').then(response => response.data)

    getActivityDetails = id => this.service.get(`/${id}`).then(response => response.data)

    createActivity = activity => this.service.post('/new', activity).then(response => response.data)
}