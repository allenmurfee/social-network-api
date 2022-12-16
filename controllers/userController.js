const { User, Thought } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const findUsers = await User.find();
      return res.json(findUsers).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const findUser = await User.findOne({ _id: req.params.userId });
      return res.json(findUser).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const createUser = await User.create(req.body);
      return res.json(createUser).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
};
