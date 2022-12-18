const router = require("express").Router();

const { getThoughts } = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post();

router.route("/:thoughtId").get().put().delete();

module.exports = router;
