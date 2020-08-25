const ops = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime por consola la tabla de multiplicar dada', ops)
    .command('crear', 'Crea una tabla de multiplicar dad con el numero y limite dado', ops)
    .help()
    .argv;

    module.exports = {
        argv
    }