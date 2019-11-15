import User from '../models/User';

/**
 * Controle de usuarios
 */
class UserController {
  async index(req, res) {
    const
      user = await User.findAll();
    return res.json({
      user,
    });
  }
  /* eslint valid-jsdoc: "error" */
  /* eslint-env es6 */
  /**
	 * Realiza a gravação do usuario no DB
	 * @param  {[type]} req requisicao
	 * @param  {[type]} res resposta
	 * @return {[type]}     retorna um JSON com o usuário criado
	 * */

  async store(req, res) {
    const {
      id,
      name,
      email,
      provider,
    } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
