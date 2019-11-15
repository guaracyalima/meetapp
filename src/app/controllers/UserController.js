import User from '../models/User';

/**
 * Controle de usuarios
 */
class UserController {
  miolo(req, res) {
    console.log(req);
    return res.json({
      uk: '____________-',
    });
  }

  index(req, res) {
    console.log(req);
    return res.json({
      success: 'Chamind',
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

  store(req, res) {
    const user = User.create(req.body);
    return res.json({
      user,
    });
  }
}

export default new UserController();
