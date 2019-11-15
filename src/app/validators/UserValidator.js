import * as yup from 'yup';

class UserValidator {
  async createValidator(user) {
    const schema = yup.object()
      .shape({
        name: yup.string()
          .required(),
        email: yup.string()
          .required(),
        passowrd: yup.string()
          .required()
          .min(6),
      });

    const validatr = await schema.isValid(user);
    return validatr;
  }
}

export default new UserValidator();
