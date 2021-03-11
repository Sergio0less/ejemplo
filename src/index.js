const express = require('express');
const app = express();
const morgan = require('morgan');

// configuraciones
app.set('port', 3000);
app.set('json spaces', 2);

//midlewers
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/asignaciones', require('./routes/rutas'));
app.use('/api/usuarios', require('./routes/ruta_usuario'));

// Ejecutar server
app.listen(app.get('port'));
console.log("mi primer servidor");

/*
npm run dev
*/