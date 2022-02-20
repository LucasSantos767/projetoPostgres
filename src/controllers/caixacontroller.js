const knex = require('../db/conexao');
class caixaControllers {

  constructor() {
    this.conexao = knex;
  }
  
  async create(req, res) {
    const {
      id_usuario,
      id_produto,
      quantproduto
    } = req.body;
    const caixa = await this.conexao('caixa').insert({
        id_usuario,
        id_produto,
        quantproduto
    }).debug()
    return res.status(201).json(caixa)
  }
  async getAll(req, res) {
    const caixa = await this.conexao('caixa').debug();
    return res.status(200).json(caixa);
  }
  async deleteOne(req, res) {
    const { id } = req.body;
    const caixa = await this.conexao('caixa').del().where('id', id).debug();
    return res.status(200).json(caixa);
  }

async patch(req, res) {
    const {
      id,
      id_usuario,
      id_produto,
      quantproduto
    } = req.body;
    const caixa = await this.conexao('caixa').update({
        id,
        id_usuario,
        id_produto,
        quantproduto
    }).debug()
    return res.status(201).json(caixa)
  }

}
module.exports = caixaControllers;