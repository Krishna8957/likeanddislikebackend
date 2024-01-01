const UserController = require("../controller/userController");

const express = require("express");
const router = express.Router();


router.post("/create",UserController.create);



module.exports = router;