const knex = require('../db/conexao');
class UsuariosControllers {

  constructor() {
    this.conexao = knex;
  }

  async create(req, res) {
    const {
      nome,
      email,
      senha
    } = req.body;
    const usuarios = await this.conexao('usuarios').insert({
      nome,
      email,
      senha
    }).debug()
    return res.status(201).json(usuarios)
  }

  async getAll(req, res) {
    const usuarios = await this.conexao('usuarios').debug();
    return res.status(200).json(usuarios);
  }

  async getOne(req, res) {
    const { nome } = req.body;
    const usuarios = await this.conexao('usuarios').where('nome', nome).first().debug();
    return res.status(200).json(usuarios);
  }

  async deleteOne(req, res) {
    const { id } = req.body;
    const usuarios = await this.conexao('usuarios').del().where('id', id).debug();
    return res.status(200).json(usuarios);
  }
}

module.exports = UsuariosControllers;