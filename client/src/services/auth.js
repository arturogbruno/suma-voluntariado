import axios from 'axios';

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
            withCredentials: true
        })
    }

    signup = ({ username, password, email, role }) => this.service.post('/signup', { username, password, email, role }).then(response => response.data);

    login = ({ username, password }) => {
        return this.service.post('/login', { username, password }).then(response => response.data);
    }

    logout = () => this.service.post('/logout').then(response => response.data);
    
    loggedin = () => this.service.get('/loggedin').then(response => response.data);
}