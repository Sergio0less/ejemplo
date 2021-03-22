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
app.use('/api/agendas', require('./routes/ruta_agenda'));
app.use('/api/asignaciones', require('./routes/ruta_asignaciones'));
app.use('/api/infoAsesoe', require('./routes/ruta_infoAsesor'));
app.use('/api/pago', require('./routes/ruta_pago'));
app.use('/api/usuarios', require('./routes/ruta_usuario'));

// Ejecutar server
app.listen(app.get('port'));
console.log("mi primer servidor");

/*
npm run dev
*/