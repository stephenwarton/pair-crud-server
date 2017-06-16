exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('beers', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('type').notNullable();
      table.float('abv').notNullable();
      table.string('url').notNullable();
      table.integer('user_id').references('users.id').unsigned().onDelete('cascade');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('beers')
};
