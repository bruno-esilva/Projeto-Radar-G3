module.exports = class Produto {
    constructor(){
      this.id = 0
      this.nome = ""
      this.descricao = ""
      this.valor = 0
      this.qtd_estoque = 0
    }
  
    static async listaProdutos(){
      let produtos = []
      const fs = require('fs');
      try {
        const jsonProdutos = await fs.readFileSync('dataBase_G3/produtos.json', 'utf8');
        produtos = JSON.parse(jsonProdutos)
      } catch (err) {
        console.log(err);
      }
  
      return produtos
    }
  }