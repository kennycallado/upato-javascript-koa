const { getRepository, CannotExecuteNotConnectedError } = require('typeorm');
const User = require('../Models/User');

class UserController {
  async index({ response }) {
    const users = await getRepository(User).find();

    return (response.body = users);
  }
  async show({ params, response }) {
    const user = await getRepository(User).findOne(params.id);

    return (response.body = user);
  }

  async store({ request, response }) {
    const { username, email, password } = request.body;
    const userNew = new User(username, email, password);

    const user = await getRepository(User).save(userNew);

    return (response.body = user);
  }

  /**
   * @param {Object} ctx
   * @param {Parameters} ctx.params
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const user = await getRepository(User).findOne(params.id);

    if (user) {
      const { username, email, password } = request.body;

      if (username) user.username = username;
      if (email) user.email = email;
      if (password) user.password = password;

      const userUpdated = await getRepository(User).manager.save(user);

      return (response.body = userUpdated);
    }

    response.status = 404;
    return (response.body = { message: 'Error, Usuario no existente.' });
  }

  async destroy({ params, response }) {
    const user = await getRepository(User).findOne(params.id);

    await getRepository(User).delete(user.id);

    return response.body = {message: 'Usuario eliminado.'}
  }
}

module.exports = new UserController();
