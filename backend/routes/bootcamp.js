const express = require("express");
const router = express.Router();
const {
  createBootcamp,
  getBootcamp,
  getOneBootcamp,
  editBootcamp,
  deleteBootcamp,
  followBootcamp
} = require("../controllers/bootcamp");

router.post("/bootcamps/add_bootcamp", createBootcamp);
router.get("/bootcamps",getBootcamp)
router.get("/bootcamps/:id", getOneBootcamp);
router.put("/bootcamps/:id", editBootcamp);
router.delete("/bootcamps/:id", deleteBootcamp);

router.put("/myBootcamps/like",followBootcamp)

module.exports = router;
