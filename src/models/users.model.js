const User = require('./users.mongo')

// GET
async function getUsers() {
  try {
    const user = await User.find({});
    return {message: "success", data: user}
  } catch (err) {
    console.log(err);
    return { message: "Failed fecth user data" };
  }
}

// GET user by ID
// async function getUserById(userId) {
//   try{
//     const user = await User.findById(userId);
//     return {message: "success", data: user}

//   }catch (err) {
//     return { message: "User not found", error: err.message};

//   }

// }

// GET user Snippet
// async function getUserSnippets(userId) {
//   try{
//     console.log(userId);
//     const snippets = await Snippet.find({user_id: userId});
//     return {message: "success", data: snippets}

//   }catch (err) {
//     return { message: "not found", error: err.message};
//   }
// }

// POST
// async function postUser(user) {
//   try {
//     const newUser = {
//       username: user.username,
//       experience: user.experience,
//       languages: user.languages,
//     };
//     User.create(newUser);
//     return { message: "User creation succesfull", data: newUser }; 
//   } catch (error) {
//     return { message: "User creation failed" , error: err.message};
//   }
// }

// update the user
// async function updateUserById(userId,user) {
//   try {
//     const updatedUser = {
//       username: user.username,
//       experience: user.experience ,
//       languages: user.languages,
//     };
//     await User.findByIdAndUpdate(userId, updatedUser)
//       return { message: "Update user succesfully", updatedUser }
//   } catch (err) {
//     console.error(err);
//     return { message: "User update failed", error: err.message };
//   }
// }

module.exports = {
  getUsers,
  getUserById,
  getUserSnippets,
  postUser,
  updateUserById,
};
