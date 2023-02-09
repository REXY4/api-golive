require('dotenv').config()

const codename = 'test'
const { name, version, description, author } = require('../package.json')

const {
  APP_NAME,
  APP_PORT,
  APP_LOG_LEVEL,
  APP_HOST,
  SSL
} = process.env
const ssl = SSL === "true" ? "https://" : "http://"
module.exports = {
  name: APP_NAME,
  port: APP_PORT,
  codename,
  packageName: name,
  version,
  description,
  author,
  host :ssl+APP_HOST,
  logLevel: APP_LOG_LEVEL || 'debug'
}
