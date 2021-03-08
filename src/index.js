const express = require('express');
const app = express();
const morgan = require('morgan');

// configuraciones
app.set('port', 3000);

//midlewers
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use(require('./routes/rutas'));

// Ejecutar server
app.listen(app.get('port'));
console.log("mi primer servidor");