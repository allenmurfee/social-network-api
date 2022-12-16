const { User, Thought } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const findUsers = await User.find();
      return res.json(findUsers).status(200);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
