const { User, Thought } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const getThoughts = await Thought.find();
      return res.json(getThoughts).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const findThought = await Thought.findOne({ _id: req.params.thoughtId });
      return res.json(findThought).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const createThought = await Thought.create(req.body);
      const updateUser = await User.findOneAndUpdate(
        {
          _id: req.body.userId,
        },
        { $push: { thoughts: _id } },
        { new: true }
      );
      return res.json(updateUser).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const deleteThought = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });
      const updatedThoughts = await Thought.find();
      return res.json(updatedThoughts).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const updateThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      return res.json(updateThought).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
};
