// Requires
const fs = require('fs');

//Imrprime ppor consola la tabla de multiplicar dada
let listarTabla = (base, limite = 10) => {

    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

//crea un archivo con una tabla dada
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let contenido = '';

        if ( !Number(base) ) {
            reject (`Lo ingresado en la base ${base} no es un numero`);
            return;
        }

        //Imprimir la tabla
        for (i = 1; i <= 10; i++) {
            contenido += ` ${base} * ${i} = ${base * i} \n`;
        }

        // Imprimiendo y generando un archivo txt con este contenido
        fs.writeFile(`C:/Users/ASUS/Documents/Bootcamps/BO_JS/01-BASES_NODE/tablas/tabla-del-${base}-al-${limite}.txt`, contenido, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-del-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}


