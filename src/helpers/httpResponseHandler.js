const httpStatusCodes = require('../constants/httpStatusCodes');
const baseResponse = require('../commons/baseResponse');

module.exports = class HttpResonseHandler {
  constructor(expressRes) {
    this.expressRes = expressRes;
  }

  makeCustom(customResponse) {
    this.expressRes.status(customResponse.statusCode);
    this.expressRes.json(customResponse);
    return customResponse;
  }

  ok(payload, customMessage = 'Success') {
    const response = {
      ...baseResponse,
      statusCode: httpStatusCodes.ok,
      message: customMessage,
      payload
    };
    this.expressRes.status(httpStatusCodes.ok);
    this.expressRes.json(response);
    return response;
  }

  created(payload, customMessage = 'Entity created') {
    const response = {
      ...baseResponse,
      statusCode: httpStatusCodes.created,
      message: customMessage,
      payload
    };
    this.expressRes.status(httpStatusCodes.ok);
    this.expressRes.json(response);
    return response;
  }

  notFound(customMessage = 'Entity not found') {
    // TODO
    return {};
  }

  serverError(error) {
    const response = {
      ...baseResponse,
      statusCode: httpStatusCodes.internalServerError,
      message: 'Internal server error',
      errorMessage: error.message,
    };
    this.expressRes.status(500);
    this.expressRes.json(response);
    return response;
  }
}
