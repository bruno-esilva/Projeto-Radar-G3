module.exports = class Cliente {
    constructor(){
      this.id = 0
      this.nome = ""
      this.telefone = 0
      this.email = ""
      this.cpf = 0
      this.cep = ""
      this.logradouro = ""
      this.numero = ""
      this.bairro = ""
      this.cidade = ""
      this.estado = ""
      this.complemento = ""
    }
  
    static async listaClientes(){
      let clientes = []
      const fs = require('fs');
      try {
        const jsonClientes = await fs.readFileSync('dataBase_G3/clientes.json', 'utf8');
        clientes = JSON.parse(jsonClientes)
      } catch (err) {
        console.log(err);
      }
  
      return clientes
    }
  }