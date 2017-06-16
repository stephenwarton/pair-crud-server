
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE users RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'stephen@stephen.com',
          password: 'password123',
          is_active: true
        },
        {
          email: 'mathew@mathew.com',
          password: 'mathew',
          is_active: true
        },
        {
          email: 'mufasa@lionking.com',
          password: 'simba',
          is_active: false
        }
      ]);
    });
};
