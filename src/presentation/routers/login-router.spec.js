describe('Login Router', () => {
  test('should return 400 if no email is no provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_pass'
      }
    }
    const httpReponse = sut.route(httpRequest)
    expect(httpReponse.statusCode).toBe(400)
  })

  test('should return 500 if no httpRequest is no provided', () => {
    const sut = new LoginRouter()
    const httpReponse = sut.route()
    expect(httpReponse.statusCode).toBe(500)
  })
  test('should return 500 if no httpRequest is no body', () => {
    const sut = new LoginRouter()
    const httpRequest = {}
    const httpReponse = sut.route(httpRequest)
    expect(httpReponse.statusCode).toBe(500)
  })
})

class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return {
        statusCode: 500
      }
    }
    const { email, password } = httpRequest.body

    if (!email || !password) {
      return {
        statusCode: 400
      }
    }
  }
}
