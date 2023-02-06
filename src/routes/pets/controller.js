import HttpResponseHandler from '../../helpers/httpResponseHandler';

export const get = async (req, res) => {
  const httpResponse = new HttpResponseHandler(res);
  const payload = [{ name: 'pochita', breed: 'Siamese' }];
  const response = httpResponse.ok(payload);
  return response;
};

export const getById = async (req, res) => {
  return new HttpResponseHandler(res).ok({ name: 'Ticky', breed: 'Siamese' });
};

export default { get, getById };
