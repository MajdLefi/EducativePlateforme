const express = require("express");
const router = express.Router();
const {
  createBootcamp,
  getBootcamp,
  getOneBootcamp,
  editBootcamp,
  deleteBootcamp,
  followBootcamp,
  unfollowBootcamp,
} = require("../controllers/bootcamp");

router.post("/bootcamps/add_bootcamp", createBootcamp);
router.get("/bootcamps", getBootcamp);
router.get("/bootcamps/:id", getOneBootcamp);
router.put("/bootcamps/:id", editBootcamp);
router.delete("/bootcamps/:id", deleteBootcamp);
router.put("/bootcamps/like/:_id/:userID", followBootcamp);
router.put("/bootcamps/unlike/:_id/:userID", unfollowBootcamp);

module.exports = router;
