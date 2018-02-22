import axios from 'axios';

const URLS = {
    SEARCH_TEAMS : `/search?type=team&q=`,
    TEAMS : `/teams`
};

export const findTeams = (team) => {
    return axios.get(`${URLS.SEARCH_TEAMS}${team}`)
        .then((response) => response.data.teams.data,
            (error) => console.error(error));
};

export const getTeamDetail = (id) => {
    return axios.get(`${URLS.TEAMS}/${id}`)
        .then((response) => response.data.data,
            (error) => console.error(error));
};