const {Router} = require('express');
const router = Router();
    
const asignaciones = require('../data/data_usuario.json');
//console.log(asignaciones);
router.get('/', (req, res) => {
    res.json(asignaciones);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    asignaciones.forEach(asignacion => {
        if(asignacion.id_usuario == id) { 
            res.status(200).json(asignacion);
            //console.log(asignacion.nombre_usuario);
        }
    });
    
    console.log(id);
});

router.post('/', (req, res) => {
    const {nombre_usuario, email_usuario} = req.body;
    //console.log(id_asignaciones);
    if (nombre_usuario && email_usuario) {
        const id = asignaciones.length +1;
        const NuevaAsignacion = {...req.body, id};
        asignaciones.push(NuevaAsignacion);
        //console.log(NuevaAsignacion);

        res.status(200).json(asignaciones);
    } else {
        res.status(500).json({error: 'no data'});
    }
});

module.exports = router;