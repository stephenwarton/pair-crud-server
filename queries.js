const knex = require('./knex');

module.exports = {
  getAll(){
    return knex('users');
  },
  getOne(user_id){
    return knex('users').where('id', user_id).first();
  },
  // getBeersForUser(user_id){
  //   return knex('beers')
  //     .join('users', 'users.id', 'beers.user_id')
  //     .where('users.id',user_id);
  // }
};
