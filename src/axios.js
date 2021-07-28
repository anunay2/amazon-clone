import axios from "axios"
const instance = axios.create({
    baseURL:  'http://localhost:5001/challenge-1db10/us-central1/api' //api URL (cloud function) URL
});

//'http://localhost:5001/challenge-1db10/us-central1/api'

export default instance;