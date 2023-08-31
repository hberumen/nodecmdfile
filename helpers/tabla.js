const fs = require('fs')
const color = require('colors')

const esribirArchivo = async (base = 1, hasta = 10, listar = false)=>{

    try {
        let consola = ''
        for(let i=1; i<=hasta; i++){
            consola += `${base} x ${i} = ${base*i} \n`
        }

        if(listar){
            console.log('============================='.rainbow)
            console.log(`   TABLA DEL ${base} HASTA EL ${hasta}`)
            console.log('============================='.cyan)
            console.log(consola.rainbow)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,consola)

        return `./salida/tabla-${base}.txt`

    } catch (error) {
        throw error
    }

}

module.exports = {
    esribirArchivo
}