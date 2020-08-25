const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./logica/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`archivo creado: ${archivo}`.yellow))
      .catch(err => console.log(err));
    break;

  default:
    console.log('El comando ingresado no es valido!'.underline.red);
    break;
}


// Base o nuestra tabla de multiplicar
// let argv2 = process.argv;

// console.log('BASE', argv);
// console.log('LIMITE', argv.limite);

// console.log('PROCESS', argv2);


// let b = argv[2]
// let base = b.split('=')[1];

