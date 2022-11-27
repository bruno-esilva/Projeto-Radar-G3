const Produto = require("../models/produtos")

module.exports={
index: async (req, res, next)=> {
    let produtos = await Produto.listaProdutos()
    res.status(200).send(produtos);
  }};