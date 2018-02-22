import axios from 'axios';

export const getCurrentSeason = () => {
    return axios.get('/search?type=season&filter=active%3Dtrue')
        .then(
            (response) => response.data.seasons.data[0],
            (error) => console.error(error) // TODO axios interceptor?
        );
};