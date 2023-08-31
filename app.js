const {esribirArchivo} = require('./helpers/tabla')
const argv = require('./config/yargs')



esribirArchivo(argv.b,argv.h,argv.l)
    .then(nomArch => console.log(nomArch.rainbow))
    .catch(error => console.log('Ocurrio un error'.rainbow+error))