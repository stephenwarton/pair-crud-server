const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('users');
  },
  getOne(user_id) {
    return knex('users').where('id', user_id).first();
  },
  getBeersForUser(user_id) {
    return knex('beers')
      .join('users', 'users.id', 'beers.user_id')
      .select('users.id', 'users.email', 'beers.id as beer_id', 'beers.name', 'beers.type', 'beers.abv', 'beers.url')
      .where('users.id', user_id);
  },
  create(beer) {
    return knex('beers').insert(beer, '*');
  },
  delete(beer_id) {
    return knex('beers').where('id', beer_id).del()
  }
};
