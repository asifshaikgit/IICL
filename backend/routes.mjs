import { Router } from "express";
import { createBlogsValidation } from "./validations/blogs_validations.mjs";
import blogsController from "./controllers/blogs_controller.mjs";

const router = Router();

router.post('/blogs', createBlogsValidation, blogsController.createBlog);
router.get('/blogs', blogsController.getAllBlogs);
router.get('/blogs/:id', blogsController.getBlogById);
router.put('/blogs/:id', blogsController.updateBlog);
router.delete('/blogs/:id', blogsController.deleteBlog);

export default router;
