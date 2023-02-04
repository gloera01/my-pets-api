const HttpResponseHandler = require('../../helpers/httpResponseHandler');
const User = require('../../models/User');
// const validator = require('../../validators/user');

exports.post = async (req, res) => {
  const httpResponse = new HttpResponseHandler(res);
  try {
    // TODO:
    // validator validate(req.body);
    const userDTO = { ...req.body, pets: [] };

    // if (validation.error) { return badRequest(); }

    const newUser = await new User(userDTO).save();

    if (!newUser) {
      // TODO:
      // unprocessable entity
      console.log('User cannot be processed');
    }

    // TODO:
    // map newUser into DTO user

    return httpResponse.created(newUser);
  } catch(error) {
    return httpResponse.serverError(error);
  }
};

exports.login = async (req, res) => {
  const httpResponse = new HttpResponseHandler(res);
  try {
    return httpResponse.ok({credentials: { accessToken: 'asdjabjhdsa67sd76dfs67dfs' }});
  } catch(error) {
    return httpResponse.serverError(error);
  }
};