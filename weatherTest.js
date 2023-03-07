const axios = require('axios');
require('dotenv').config();

async function getWeatherHistory (cidade, data) {
    const key = process.env.WEATHER_API;
    const url = `http://api.weatherapi.com/v1/history.json?key=${key}&q=${cidade}&dt=${data}`;
    try {
        const response = await axios.get(url);
        const mediaDoDia = response.data.forecast.forecastday[0].day.avgtemp_c;
        console.log(mediaDoDia);
    } catch (erro) {
        console.log(erro.message);
    }
}

const cidade = 'New York';
const data = '2023-03-06';

getWeatherHistory(cidade, data);