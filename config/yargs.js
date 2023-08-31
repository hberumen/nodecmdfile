const { number, boolean, options } = require('yargs');

const argv = require('yargs')
    .option('base',{
        alias: 'b',
        type: number,
        demandOption: true,
        describe: 'Escribe el numero base'
    })
    .option('hasta',{
        alias: 'h',
        type: number,
        default: 10,
        describe: 'Escribe el valor hasta el cual se calculara.'
    })
    .option('listar',{
        alias: 'l',
        type: boolean,
        default: false,
        describe: 'Mostrar o no en consola la info.'
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw  'La base tiene que ser un numero.'
        }
        return true
    }).argv

    module.exports = argv