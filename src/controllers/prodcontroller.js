const knex = require('../db/conexao');
class ProdutosControllers {

  constructor() {
    this.conexao = knex;
  }
  
  async create(req, res) {
    const {
      nome,
      bar_code,
      quantidade
    } = req.body;
    const produtos = await this.conexao('produtos').insert({
      nome,
      bar_code,
      quantidade
    }).debug()
    return res.status(201).json(produtos)
  }
  async getAll(req, res) {
    const produtos = await this.conexao('produtos').debug();
    return res.status(200).json(produtos);
  }
  async getOne(req, res) {
    const { nome } = req.body;
    const produtos = await this.conexao('produtos').where('nome', nome).first().debug();
    return res.status(200).json(produtos);
  }

  async deleteOne(req, res) {
    const { nome } = req.body;
    const produtos = await this.conexao('produtos').del().where('nome', nome).debug();
    return res.status(200).json(produtos);
  }
  
  async patch(req, res) {
    const {
      id,
      nome,
      bar_code,
      quantidade
    } = req.body;
    const produtos = await this.conexao('produtos').where('id',id).update({
        nome,
        bar_code,
      quantidade
    }).debug()
    return res.status(201).json(produtos)
  }




}
module.exports = ProdutosControllers;