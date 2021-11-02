const MissingParamError = require('./missin-param-error')
module.exports = class HttpResponse {
  static badRequest (param) {
    return { statusCode: 400, body: new MissingParamError(param) }
  }

  static serverError (param) {
    return { statusCode: 500, body: new MissingParamError(param) }
  }
}
