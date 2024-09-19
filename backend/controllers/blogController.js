export const searchBlogs = async (req, res) => {
res.status(200).json({ message: "search blogs" });
}
export const getBlogs = async (req, res) => {
res.status(200).json({ message: "get all blogs" });
};
export const getBlog = async (req, res) => {
res.status(200).json({ message: "get one blog" });
}
export const createBlog = async (req, res) => {
res.status(200).json({ message: "create a blog" });
}
export const updateBlog = async (req, res) => {
res.status(200).json({ message: "update a blog" });
}
export const deleteBlog = async (req, res) => {
res.status(200).json({ message: "delete a blog" });
}