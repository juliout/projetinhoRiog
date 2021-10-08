const express = require('express');
const router = express.Router();
const { buscarUsuario, buscarPartida, partida } = require ('../controller/buscarUsuario')
const app = express()

/* GET home page. */
router.post('/', buscarUsuario);
router.post('/partidas', buscarPartida)
router.post('/match', partida)
module.exports = router;
