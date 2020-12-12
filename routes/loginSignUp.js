const express = require("express");

const loginSignUpController=require("../controllers/loginSignUp");

const router = express.Router();

router.get('/',loginSignUpController.signUp);

module.exports = router;