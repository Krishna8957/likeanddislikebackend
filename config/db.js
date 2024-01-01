const mongoose = require("mongoose");

const connectedDB = async ()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/LikeAndDisLike");
        console.log("DB connected success")
    } catch (error) {
        console.error("DB connected failed")
    }
}

module.exports = connectedDB;