export const getUser = async (req, res) => {
  res.status(200).json({ message: "get one user" });
};
export const createUser = async (req, res) => {
  res.status(200).json({ message: "create a user" });
};
export const updateUser = async (req, res) => {
  res.status(200).json({ message: "update a user" });
};
export const deleteUser = async (req, res) => {
  res.status(200).json({ message: "delete a user" });
};
export const loginUser = async (req, res) => {
  res.status(200).json({ message: "login a user" });
};
export const logoutUser = async (req, res) => {
  res.status(200).json({ message: "logout a user" });
};
