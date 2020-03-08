import axios from 'axios';

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`,
            withCredentials: true
        })
    }

    getAllUsers = () => this.service.get('/all').then(response => response.data);

    getUserDetails = id => this.service.get(`/${id}`).then(response => response.data);

    updateUser = (id, fieldToUpdate) => this.service.put(`/${id}`, fieldToUpdate).then(response => response.data);

    updateUserFav = (userId, activityId) => this.service.put(`/${userId}/favActivities/add`, activityId).then(response => response.data);
}