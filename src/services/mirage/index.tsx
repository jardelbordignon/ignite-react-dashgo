import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

faker.locale = 'pt_BR'

type User = {
  name: string
  email: string
  create_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name() { return faker.name.findName() },
        email() { return faker.internet.email().toLowerCase() },
        createAt() { return faker.date.recent(10) }
      })
    },

    seeds(server) {
      server.createList('user', 200)
    },
    
    routes() {
      this.namespace = 'api'
      this.timing = 1000

      this.get('/users')
      this.post('/users')

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}
