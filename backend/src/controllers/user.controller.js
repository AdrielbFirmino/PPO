const userService = require('../services/user.service')

const create = async (req, res)=> {
    const {name, username, email, password, avatar} = req.body;

    if(!name || !username || !email || !password || !avatar) {
        res.status(400).json("Submit all fields for registration")
    }

    const user = await userService.create(req.body);

    if(!user){
        return res.status(400).send({message: "Error creating user"})
    }

    res.status(201).send({
        message: "User created sucessfully!",
        user: {
            id: user._id,
            name,
            username,
            email,
            password,
            avatar
        }
    })
};

module.exports = {create}