import statusCodes from '../constants/httpCodes';
import baseResponse from '../commons/baseResponse';

class HttpResponseHandler {
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
      statusCode: statusCodes.ok,
      message: customMessage,
      payload,
    };
    this.expressRes.status(statusCodes.ok);
    this.expressRes.json(response);
    return response;
  }

  created(payload, customMessage = 'Entity created') {
    const response = {
      ...baseResponse,
      statusCode: statusCodes.created,
      message: customMessage,
      payload,
    };
    this.expressRes.status(statusCodes.ok);
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
      statusCode: statusCodes.internalServerError,
      message: 'Internal server error',
      errorMessage: error.message,
    };
    this.expressRes.status(500);
    this.expressRes.json(response);
    return response;
  }
}

export default HttpResponseHandler;
