require('dotenv').config() // variaveis de ambiente

module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
  },
}
