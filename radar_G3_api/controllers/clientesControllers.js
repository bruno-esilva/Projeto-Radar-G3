const Cliente = require("../models/clientes")

module.exports={
index: async (req, res, next)=> {
    let clientes = await Cliente.listaClientes()
    res.status(200).send(clientes);
  }};
  