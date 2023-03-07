const axios = require('axios');
const add = require('date-fns/add');
const format = require('date-fns/format');
require('dotenv').config();

async function getWeatherHistory (cidade) {
    const key = process.env.WEATHER_API;
    let mediasDeTemperatura = [];
    for(let i = -1; i > -8; i--) {
        //Começa pela data de ontem, que é formatada em yyyy-mm-dd. A cada laço subtrai-se um dia
        let data = format(add(new Date(), {days: i}), 'yyyy-LL-dd')
        let url = `http://api.weatherapi.com/v1/history.json?key=${key}&q=${cidade}&dt=${data}`;
        try {
            const response = await axios.get(url);
            const mediaDoDia = response.data.forecast.forecastday[0].day.avgtemp_c;
            mediasDeTemperatura.push(mediaDoDia);
        } catch (erro) {
            console.log(erro.message);
        }
    }
    let mediaDaSemana = mediasDeTemperatura.reduce((a , b) => a + b, 0) / mediasDeTemperatura.length;
    console.log(mediaDaSemana);
}

const cidade = 'New York';

getWeatherHistory(cidade);

