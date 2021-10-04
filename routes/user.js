const express = require('express');
const router = express.Router();
const { buscarUsuario } = require ('../controller/buscarUsuario')

/* GET home page. */
router.post('/', buscarUsuario);

module.exports = router;
