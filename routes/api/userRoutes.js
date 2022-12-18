const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/users/:userId/friends/:friendId").get().delete()

module.exports = router;
