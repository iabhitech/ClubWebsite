const express = require("express");

const HomeController=require("../controllers/homepage");

const router = express.Router();

router.get('/',HomeController.getHomepage);

module.exports = router;