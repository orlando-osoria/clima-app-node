const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }



    //Salida
    //El clima de XXX es de XX
    //En caso de que no se puede obtener , no se pudo determinar el clima de XXX

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)