// importa las dependecia 
const express = require('express') ;
const bodyParser = require('body-parser') ;
const cors = require('cors') ;

// creamos el servidor
const app = express() ;

// configurar los cors (para que permita las peticiones del lado del front)
app.use(cors() ) ;

//importar las rutas
const productRoutes = require('./router/product') ;

// configurar bodyparser (para que llegue a formato json los datos del front)
app.use(bodyParser.urlencoded( {extended: true} ) ) ;
app.use(bodyParser.json() ) ;

// configurar static folder (para que todos las imagenes se guarden en uploads)
app.use(express.static('uploads') ) ;

//configurar las rutas
app.use('/api/v1', productRoutes) ;

//exportamos app
module.exports = app ;