import status from "http-status";
import blogService from "../services/blogs_service.mjs";
import { UnExpectedError } from "../utils/error_handlers.mjs";

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(status.CREATED).json(blog);
  } catch (error) {
    throw new UnExpectedError(error.message);
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = parseInt(req.query.pageSize, 10) || 10;
    const { author, date } = req.query;

    const filters = {};
    if (author) filters.author = author;
    if (date) filters.date = date;

    const blogs = await blogService.getAllBlogs({ filters, page, pageSize });
    res.status(status.OK).json(blogs);
  } catch (error) {
    throw new UnExpectedError(error.message);
  }
};

// Get a blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    if (!blog) return res.status(status.NOT_FOUND).json({ message: "Blog not found" });
    res.status(status.OK).json(blog);
  } catch (error) {
    throw new UnExpectedError(error.message);
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await blogService.updateBlog(req.params.id, req.body);
    if (!updatedBlog) return res.status(status.NOT_FOUND).json({ message: "Blog not found" });
    res.status(status.OK).json(updatedBlog);
  } catch (error) {
    throw new UnExpectedError(error.message);
  }
};

// Delete a blog (soft delete)
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await blogService.deleteBlog(req.params.id);
    if (!deletedBlog) return res.status(status.NOT_FOUND).json({ message: "Blog not found" });
    res.status(status.NO_CONTENT).send();
  } catch (error) {
    throw new UnExpectedError(error.message);
  }
};

export default {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
