import axios from 'axios';

export default class FilesServices {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/files`,
            withCredentials: true
        })
    }

    handleUpload = theFile => this.service.post('/upload', theFile).then(response => response.data);
}