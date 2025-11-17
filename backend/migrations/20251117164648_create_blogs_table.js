/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('blogs', (table) => {
    table.increments('id').primary();       // Auto-incrementing primary key
    table.string('title', 255).notNullable();
    table.text('content').notNullable();
    table.string('author', 100).notNullable();
    table.timestamps(true, true);           // created_at and updated_at with defaults
    table.boolean('is_deleted').defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('blogs');
};
