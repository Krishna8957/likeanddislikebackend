const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    likedBy:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }
    ],
    dislikedBy:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }
    ]

})

module.exports = mongoose.model("posts",postSchema);