import db from './db'

let users = db.getCollection('users')

if (!users) {
  users = db.addCollection('users')
  users.on('insert', (data) => { data.id = data.$loki })
}

export default users
