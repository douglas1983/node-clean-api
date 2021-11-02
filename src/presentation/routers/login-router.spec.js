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
})

class LoginRouter {
  route(httpRequest) {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400
      }
    }
  }
}
