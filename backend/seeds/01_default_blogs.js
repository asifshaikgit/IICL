/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  // Deletes ALL existing entries
  await knex('blogs').del();

  // Inserts default entries
  await knex('blogs').insert([
    {
      title: 'Welcome to My Blog',
      content: 'This is the first blog post. Enjoy reading!',
      author: 'Admin',
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: 'React Tips',
      content: 'Learn how to use React efficiently with hooks and state management.',
      author: 'Jane Doe',
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: 'Vite + React Setup',
      content: 'A quick guide to setting up a React project with Vite.',
      author: 'John Doe',
      is_deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
