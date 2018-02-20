import axios from 'axios';
import API_KEY from './api-key';

const BASE_URL = 'http://api.eliteprospects.com/beta';
const URLS = {
    SEARCH_PLAYERS : BASE_URL + `/search?apikey=${API_KEY}&type=player&q=`,
    SEARCH_TEAMS : BASE_URL + `/search?apikey=${API_KEY}&type=team&q=`,
    PLAYER_DETAIL : BASE_URL + `/players`
};

export const findPlayers = (playerName) => {
    return axios.get(`${URLS.SEARCH_PLAYERS}${playerName}`)
        .then((response) => response.data.players.data,
            (error) => console.error(error));
};

export const findTeams = (team) => {
    return axios.get(`${URLS.SEARCH_TEAMS}${team}`)
        .then((response) => response.data.teams.data,
            (error) => console.error(error));
};

export const getPlayerDetail = (id) => {
    return axios.get(`${URLS.PLAYER_DETAIL}/${id}?apikey=${API_KEY}`)
        .then((response) => response.data.data,
            (error) => console.error(error));
};