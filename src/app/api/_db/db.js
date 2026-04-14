import Loki from 'lokijs'

if (!globalThis._lokiDb) {
  globalThis._lokiDb = new Loki('careermate-ai')
}

export default globalThis._lokiDb
