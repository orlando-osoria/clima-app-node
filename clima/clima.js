const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=eac5195c5fc15d4a4d62ff7b150275d9&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}