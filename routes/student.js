const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const upload = require("../middleware/uploads");

const {
  getStudents,
  getStudent,
  register,
  login,
  updateStudent,
  deleteStudent,
  uploadImage,
  getUser,
} = require("../controllers/student");

router.post("/uploadImage", upload, uploadImage);
router.post("/register", register);
router.post("/login", login);
router.get("/getAllStudents", getStudents);
router.put("/updateStudent/:id", protect, updateStudent);
router.delete("/deleteStudent/:id", protect, deleteStudent);
router.post("/getUser", getUser);
// router.get("/getUserDetail/:id", getUserDetail);

module.exports = router;
