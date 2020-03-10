import axios from 'axios';

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/activities`,
            withCredentials: true
        })
    }

    getAllActivities = () => this.service.get('/all').then(response => response.data);

    getActivitiesByTerm = searchTerm => this.service.get(`/search/${searchTerm}`).then(response => response.data);

    getActivityDetails = id => this.service.get(`/${id}`).then(response => response.data);

    getActivitiesByCategory = category => this.service.get(`/categories/${category}`).then(response => response.data);

    createActivity = newActivity => this.service.post('/new', newActivity).then(response => response.data);

    updateActivity = (id, fieldToUpdate) => this.service.put(`/${id}`, fieldToUpdate).then(response => response.data);

    addParticipant = (idActivity, idUser) => this.service.put(`/${idActivity}/participants/add`, idUser).then(response => response.data);
}