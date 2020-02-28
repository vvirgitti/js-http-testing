const app = require('./index')
const request = require('supertest')

describe('Supertest', () => {
  it('GET / returns 200', async () => {
    const response = await request(app)
      .get('/')

    expect(response.statusCode).toBe(200)
    expect(response.text).toBe('Hello World!')
  })

  it('GET /simulate-error returns 500', async () => {
    const response = await request(app)
      .get('/simulate-error')

    expect(response.statusCode).toBe(500)
    expect(response.text).toBe('Oh no it is broken')
  })
})

