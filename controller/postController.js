const postModel = require("../model/postModel");
const userModel = require("../model/userModel");

class PostController {
    static createPost = async (req, res) => {
        try {
            const postData = new postModel(req.body);
            const savedPost = await postData.save();
            res.status(200).json(savedPost);


        } catch (error) {
            res.send({ "status": "failed", "message": "data add failed" })


        }
    }

    static like = async (req, res) => {
        try {

            const postId = await req.params.postId;
            const userId = await req.params.userId;

            const postExist = await postModel.findById( postId );
            const userExist = await userModel.findById(userId );

            if (!postExist) {
                return res.status(400).json({ message: "Post not Exist" })
            };

            if (!userExist) {
                return res.status(400).json({ message: "User not Exist" })
            }
             
            if(postExist.likedBy.includes(userId)){
                return res.status(400).json({message : "Post already liked"})
            }

          if(postExist.dislikedBy.includes(userId)){
            postExist.dislikedBy.pull(userId);
            postExist.dislikes -= 1; 
          }

          postExist.likedBy.push(userId);
          postExist.likes += 1;

          const savedLikes = await postExist.save();

          res.status(200).json(savedLikes);

        } catch (error) {
            res.status(500).json({error:error});

        }
    }

    static dislike = async (req, res) => {
        try {

            const postId = await req.params.postId;
            const userId = await req.params.userId;

            const postExist = await postModel.findById( postId );
            const userExist = await userModel.findById(userId );

            if (!postExist) {
                return res.status(400).json({ message: "Post not Exist" })
            };

            if (!userExist) {
                return res.status(400).json({ message: "User not Exist" })
            }
             
            if(postExist.dislikedBy.includes(userId)){
                return res.status(400).json({message : "Post already dislikedBy"})
            }

          if(postExist.likedBy.includes(userId)){
            postExist.likedBy.pull(userId);
            postExist.likes -= 1; 
          }

          postExist.likedBy.push(userId);
          postExist.dislikes += 1;

          const savedDisLikes = await postExist.save();

          res.status(200).json(savedDisLikes);

        } catch (error) {
            res.status(500).json({error:error});

        }
    }

}

module.exports = PostController;