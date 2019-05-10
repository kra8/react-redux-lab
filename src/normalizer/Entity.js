import { schema } from 'normalizr'

class Entity extends schema.Entity {
  constructor(key, model, options) {
    super(key, options)
    this.model = model
  }

  getImmutableModel() {
    return this.model
  }
}

export default Entity
