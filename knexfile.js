// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/pairs-crud'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
