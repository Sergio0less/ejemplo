const {Router} = require('express');
const router = Router();
    
const asignaciones = require('../data/data_asignaciones.json');
router.get('/', (req, res) => {
    res.json(asignaciones);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    asignaciones.forEach(asignacion => {
        if(asignacion.id_asignaciones == id) { 
            res.status(200).json(asignacion);
        } 
    });
    
    //console.log(id);
});

router.post('/', (req, res) => {
    const {nombre_asignacion, status_asignacion, precio} = req.body;
    //console.log(id_asignaciones);
    if (nombre_asignacion && status_asignacion && precio) {
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