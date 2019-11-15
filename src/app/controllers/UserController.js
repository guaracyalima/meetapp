import * as yup from 'yup';
import UserValidator from '../validators/UserValidator';
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
    // camada de validacao
    const validation = await UserValidator.createValidator(req.body);

    if (!validation) {
      return res.status(400)
        .json({
          error: 'Validation error',
        });
    }

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
