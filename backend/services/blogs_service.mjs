import blogsRepository from "../repository/blogs_repository.mjs";

const createBlog = async (data) => {
  const newBlog = {
    ...data,
    created_at: new Date(),
    updated_at: new Date(),
  };
  const blog = await blogsRepository.create(newBlog);
  return blog;
};

const getAllBlogs = async ({ filters = {}, page = 1, pageSize = 10 } = {}) => {
  const { total, blogs } = await blogsRepository.findAll({ filters, page, pageSize });

  return {
    page,
    pageSize,
    total,
    blogs
  };
};

const getBlogById = async (id) => {
  return await blogsRepository.findById(id);
};

const updateBlog = async (id, data) => {
  const updateData = {
    ...data,
    updated_at: new Date(),
  };
  return await blogsRepository.updateById(id, updateData);
};

const deleteBlog = async (id) => {
  return await blogsRepository.softDeleteById(id);
};

export default {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
