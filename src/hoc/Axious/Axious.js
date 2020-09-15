import axios from 'axios';

const instance = axios.create(
    {
      baseURL:'https://sttepalink.firebaseio.com/'
    }
);

export default instance;