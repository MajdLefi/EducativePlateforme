const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth")
const {
  getCurrent,
  getAllUsers,
  addUser,
  editUser,
  deleteUser,
} = require("../controllers/user");

router.get("/users", getAllUsers);
router.get("/user/:userID", getCurrent);
router.post("/user/add_user",addUser)
router.put("/users/:userID", editUser);
router.delete("/users/:userID", deleteUser);


module.exports = router;
