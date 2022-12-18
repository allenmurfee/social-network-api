const { User, Thought } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const findThoughts = await Thought.find();
      return res.json(findThoughts).status(200);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
};
