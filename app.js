const argv = require('./config/yargs').argv;
const colors = require('colors');

// Destructuración
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

switch (argv._[0]) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((arch) => console.log(`Se generó correctamente el archivo`, `${arch}`.green))
            .catch((err) => console.log('Error: ', err));
        break;
    default:
        console.log('default');
        break;
}