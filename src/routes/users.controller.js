const User = require('../models/users.mongo')

// POST
async function httpPostUsers(req, res) {
  const body = req.body;
  try {
    const newUsers = {
      user_id: body.user_id,
      user_name: body.user_name,
      balance: body.balance,
    };
    await User.create(newUsers);
    return res.status(201).json(newUsers);
  } catch (error) {
    return res.status(400).json({ message: "users creation failed", error: err.message });
  }
}

module.exports = { httpPostUsers };
