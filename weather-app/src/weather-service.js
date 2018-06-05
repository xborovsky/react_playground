import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = (lat, lon) => {
    return axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}`);
};

export const getForecast = (lat, lon) => {
    return axios.get(`${BASE_URL}/forecast/daily?lat=${lat}&lon=${lon}&cnt=5`);
};

export const getCurrentUvIndex = (lat, lon) => {
    return axios.get(`${BASE_URL}/uvi?lat=${lat}&lon=${lon}`);
};

export const getUvIndexForecast = (lat, lon) => {
    return axios.get(`${BASE_URL}/uvi/forecast?lat=${lat}&lon=${lon}&cnt=5`);
};