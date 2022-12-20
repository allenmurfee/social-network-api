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
  async deleteUser(req, res) {
    try {
      const deleteUser = await User.findOneAndRemove({
        _id: req.params.userId,
      });
      const updatedUsers = await User.find();
      return res.json(updatedUsers).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const updateUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      return res.json(updateUser).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  // Friends functions
  async addFriend(req, res) {
    try {
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async removeFriend(req, res) {
    try {
    } catch (err) {
      return res.status(404).json(err);
    }
  }
};
