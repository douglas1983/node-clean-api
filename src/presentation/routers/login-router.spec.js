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

  test('should return 400 if no password is no provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'any_email'
      }
    }
    const httpReponse = sut.route(httpRequest)
    expect(httpReponse.statusCode).toBe(400)
  })
})

class LoginRouter {
  route (httpRequest) {
    const { email, password } = httpRequest.body
    if (!email || !password) {
      return {
        statusCode: 400
      }
    }
  }
}
