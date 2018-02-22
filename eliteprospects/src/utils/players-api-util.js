import axios from 'axios';

const URLS = {
    SEARCH_PLAYERS : `/search?type=player&q=`,
    PLAYER_DETAIL : `/players`
};

export const findPlayers = (playerName) => {
    return axios.get(`${URLS.SEARCH_PLAYERS}${playerName}`)
        .then((response) => response.data.players.data,
            (error) => console.error(error));
};

export const getPlayerDetail = (id) => {
    return axios.get(`${URLS.PLAYER_DETAIL}/${id}`)
        .then((response) => response.data.data,
            (error) => console.error(error));
};

export const getPlayerStats = (id) => {
    return axios.get(`${URLS.PLAYER_DETAIL}/${id}/stats?sort=season.startYear:desc`)
        .then((response) => response.data.data,
            (error) => console.error(error));
};