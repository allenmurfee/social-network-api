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
      console.log(createThought._id);
      const updateUser = await User.findOneAndUpdate(
        {
          _id: req.body.userId,
        },
        { $push: { thoughts: createThought._id } },
        { new: true }
      );
      return res.json(updateUser).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.body.userId },
        {
          $pull: { thoughts: req.params.thoughtId },
        }
      );
      const deleteThought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      const updatedThoughts = await Thought.find();
      return res.json(updatedThoughts).status(200);
    } catch (err) {
      console.log(err);
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
  //Reaction functions
  async createReaction(req, res) {
    try {
      const createReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { reactions: req.body },
        { new: true }
      );
      return res.json(createReaction).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const deleteReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: req.body.reactionsId } },
        { new: true }
      );
      console.log(deleteReaction);
      const updatedThoughts = await Thought.find();
      return res.json(updatedThoughts).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
};
