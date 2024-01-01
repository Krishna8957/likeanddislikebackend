const express =  require("express");
const postRouter =  express.Router();
const postController = require("../controller/postController");


postRouter.post("/create",postController.createPost );

postRouter.post("/like/:postId/:userId",postController.like)
postRouter.post("/dislike/:postId/:userId",postController.dislike)


module.exports = postRouter