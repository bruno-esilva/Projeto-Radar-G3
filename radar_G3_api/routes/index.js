const express = require('express');
const router = express.Router();
const ClientesControllers = require("../controllers/clientesControllers");
const ProdutosControllers = require("../controllers/produtosControllers");



/* GET home page. */

router.get('/clientes', ClientesControllers.index);
router.get('/produtos', ProdutosControllers.index);


module.exports = router;
