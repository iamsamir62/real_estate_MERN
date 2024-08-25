const express = require("express");
const { loginValidation, registerValidation } = require("../validation/authValidation");
const { registerUser, loginUser, getAllUserData, deleteUser } = require("../controllers/authController");
const upload = require('../config/multerConfig');

const router = express.Router();


router.post('/register', upload.single('image'), registerValidation, registerUser);
router.route('/login').post(loginValidation, loginUser);
router.route('/users').get(getAllUserData);
router.route('/users/:id').delete(deleteUser);



module.exports = router;