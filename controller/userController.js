const userModel = require("../model/userModel");

class UserController{

     

    static  create = async (req,res)=>{
        try {
            const userData = new userModel(req.body);
            const savedUser = await userData.save();
            res.status(200).json(savedUser);
        } catch (error) {
            res.status(500).json({ error : error});
        }
    };

    

}

module.exports = UserController;