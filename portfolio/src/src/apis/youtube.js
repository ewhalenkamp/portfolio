import axios from 'axios';

const API_KEY = 'AIzaSyCXVLXqVuCYYt_qO-qWQW1jvHp5G2H-pLI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
})