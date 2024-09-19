import express from 'express';

import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.get('/', getBlogs);
blogRouter.get('/:id', getBlog);
blogRouter.post('/', createBlog);
blogRouter.put('/:id', updateBlog);
blogRouter.delete('/:id', deleteBlog);
export default blogRouter;