const Sequelize = require('Sequelize')
const db = new Sequelize('postgres://localhost:5432/beyonce')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pictureURL: Sequelize.STRING,
  age: Sequelize.SMALLINT
})

const sync = db.sync();

module.exports = {
  sync,
  db,
  User
}