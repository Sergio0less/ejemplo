const {Router} = require('express');
const router = Router();
    
const asignaciones = require('../data/data_agenda.json');
router.get('/', (req, res) => {
    res.json(asignaciones);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    asignaciones.forEach(asignacion => {
        if(asignacion.cita_id == id) { 
            res.status(200).json(asignacion);
        } 
    });
    
    //console.log(id);
});

router.post('/', (req, res) => {
    const {usuario_id, status_asignacion} = req.body;
    if (usuario_id && status_asignacion) {
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