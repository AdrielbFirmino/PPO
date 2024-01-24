const userService = require('../services/user.service')

const create = async (req, res)=> {
    const {name, username, email, password, avatar} = req.body;

    if(!name || !username || !email || !password || !avatar) {
        res.status(400).json({message: "Submit all fields for registration"})
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

const findAll = async (req, res) => {
    const users = await userService.findAll();

    if(users.length === 0) {
        return res.status(400).send({message: "There are no registered users"})
    }

    res.send(users)
}

const findById = async (req, res) => {
    const user = req.user;
    res.send(user);
}

const update = async (req, res) => {
    const {name, username, email, password, avatar} = req.body;

    if(!name && !username && !email && !password && !avatar) {
        res.status(400).json({message: "Submit at least one field for update"});
    }

    const {id, user} = req;

    await userService.update(
        id,
        name,
        username,
        email,
        password,
        avatar
    )

    res.send({message: "User sucessfully updated"})
};

module.exports = {create, findAll, findById, update}