exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.dateTime('created_at').notNullable();
      table.boolean('is_active').notNullable().defaultTo(true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
};
