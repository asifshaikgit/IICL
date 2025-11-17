import { dbConnection } from "../config/database.mjs";

const create = async (newBlog) => {
  const inserted = await dbConnection('blogs')
    .insert(newBlog)
    .returning('*');
  return inserted[0];
};

const findAll = async ({ filters = {}, page = 1, pageSize = 10 } = {}) => {
  let query = dbConnection('blogs').select('*').whereNull('deleted_at');

  if (filters.author) query = query.where('author', filters.author);
  if (filters.date) query = query.where('created_at', filters.date);

  const totalQuery = dbConnection('blogs').count('* as count').whereNull('deleted_at');
  if (filters.author) totalQuery.where('author', filters.author);
  if (filters.date) totalQuery.where('created_at', filters.date);

  const [{ count: total }] = await totalQuery;

  const offset = (page - 1) * pageSize;
  const blogs = await query.limit(pageSize).offset(offset);

  return { total, blogs };
};

const findById = async (id) => {
  const blog = await dbConnection('blogs')
    .select('*')
    .where({ id })
    .whereNull('deleted_at')
    .first();
  return blog || null;
};

const updateById = async (id, updateData) => {
  updateData.updated_at = new Date();
  const updated = await dbConnection('blogs')
    .where({ id })
    .whereNull('deleted_at')
    .update(updateData)
    .returning('*');
  return updated[0] || null;
};

const softDeleteById = async (id) => {
  const deleted = await dbConnection('blogs')
    .where({ id })
    .whereNull('deleted_at')
    .update({ deleted_at: new Date() })
    .returning('*');
  return deleted[0] || null;
};

export default {
  create,
  findAll,
  findById,
  updateById,
  softDeleteById,
};
