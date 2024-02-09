const User = require("../models/users.mongo");

async function httpGetWallet(req, res) {
  const id = req.params.id;
  try {
    let UserData = await User.find({ user_id: id });
    // console.log(data);

    if (UserData.length !== 0) {
      const newWallet = {
        wallet_id: UserData[0].user_id,
        balance: UserData[0].balance,
        wallet_user: {
          user_id: UserData[0].user_id,
          user_name: UserData[0].user_name,
        },
      };
      return res.status(200).json(newWallet);
    } else {
      return res
        .status(404)
        .json({ message: `wallet with id: ${id} was not found` });
    }
  } catch (err) {
    return res.status(400).json({ message: "Failed", error: err.message });
  }
}


async function httpUpdateWallet(req, res) {
    const id = req.params.id;
  const body = req.body;
    if(body.recharge <  100 || body.recharge > 10000){
        return res.status(400)
        .json({ message: `invalid amount: ${body.recharge}` });
    }
  try {
    let UserData = await User.find({ user_id: id });

    if (UserData.length !== 0) {
      const newWallet = {
        wallet_id: UserData[0].user_id,
        balance: UserData[0].balance + body.recharge,
        wallet_user: {
          user_id: UserData[0].user_id,
          user_name: UserData[0].user_name,
        },
      };
      return res.status(200).json(newWallet);
    } else {
      return res
        .status(404)
        .json({ message: `wallet with id: ${id} was not found` });
    }
  } catch (err) {
    return res.status(400).json({ message: "Failed", error: err.message });
  }
}

module.exports = { httpGetWallet, httpUpdateWallet };
