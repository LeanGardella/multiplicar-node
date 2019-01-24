// Requireds
let fs = require('fs');
let colors = require('colors');

// Genero la función
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor ingresado '${ base }' no es un número.`);
            return;
        }


        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    console.log('==================='.green);
    console.log(`=== Tabla del ${base} ===`.green);
    console.log('==================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }
}

// Exporto la función
module.exports = {
    crearArchivo,
    listarTabla
}