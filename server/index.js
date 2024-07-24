// importamos dependencia "mongoose"
const moongose = require('mongoose') ;
//importamos el servidor
const app = require('./app') ;

// lee los .env (variables de entorno)
require('dotenv').config() ;

               // obtiene las variables de entorno
const dbUser = process.env.DB_USER ;
const dbPass = process.env.DB_PASS ;
const dbHost = process.env.DB_HOST ;
const ipServer = process.env.IP_SERVER.toString() ;
const apiVersion = 'v1' ;
const port = 4000 ;

// conectar la base de datos
const conectarDB = async () => {
    try {
        await moongose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/`)
       
        app.listen(port , () => {
            console.log('=================================')
            console.log('========      API     ===========')
            console.log('=================================')
            console.log(`htpp://${ipServer}:${port}/api/${apiVersion}/`)
        })
        } catch (error) {
        console.log('error al corectar la base de datos', error)
        }
};

conectarDB() ;
