const express = require("express");
const { loginValidation, registerValidation } = require("../validation/authValidation");
const { registerUser, loginUser } = require("../controllers/authController");
const upload = require('../config/multerConfig');

const router = express.Router();


router.post('/register', upload.single('image'), registerValidation, registerUser);
router.route('/login').post(loginValidation, loginUser);


module.exports = router;