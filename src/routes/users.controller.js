const { getUsers, getUserById, getUserSnippets, postUser, updateUserById } = require("../../models/users.model");

// GET
async function httpGetUsers(req, res) {
  return res.status(200).json(await getUsers());
}

// GET user by id
async function httpGetUser(req, res) {
  const userId = req.params.id;
  return res.status(200).json(await getUserById(userId));
}

// GET user snippets
async function httpGetUserSnippets(req, res) {
  const userId = req.params.id;
  return res.status(200).json(await getUserSnippets(userId));
}

// POST
async function httpPostUsers(req, res) {
  const user = req.body;
  return res.status(201).json(await postUser(user));
}

// Update user
async function httpUpdateUser(req, res) {
  const userId = req.params.id;
  user = req.body;
  return res.status(201).json(await updateUserById(userId, user));
}

module.exports = { httpGetUsers, httpGetUser,httpGetUserSnippets, httpPostUsers, httpUpdateUser };
