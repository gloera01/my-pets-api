const HttpResponseHandler = require('../../helpers/httpResponseHandler');

exports.get = async (req, res) => {
  const httpResponse = new HttpResponseHandler(res);
  const payload = [{ name: 'pochita', breed: 'Siamese' }];
  const response = httpResponse.ok(payload);
  return response;
};

exports.getById = async (req, res) => {
  return new HttpResponseHandler(res).ok({ name: 'Ticky', breed: 'Siamese' });
};