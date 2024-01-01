const express =  require("express");
const bodyparser = require("body-parser");

const userRouter = require("./router/userRouter");
// const postRouter = require("./controller/postController")
const postRouter = require("./router/postRouter")
const connectedDB = require("./config/db");
connectedDB();

const app = express();

const dotenv = require("dotenv");
dotenv.config()

app.use(express.json());
app.use(bodyparser.json());

app.use("/insta/user",userRouter),
app.use("/insta/post",postRouter)


module.exports =app;