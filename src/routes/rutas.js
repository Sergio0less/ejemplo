const {Router} = require('express');
const router = Router();
// Tambien puede utilisarse de la siguiente manera:
    //const express = require('express');
    //const router = express.router;

router.get('/', (req,res) => {
    res.json({"name":"John"});
    //res.send("si funciona")
});

module.exports = router;