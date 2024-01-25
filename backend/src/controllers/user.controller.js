import userService from '../services/user.service.js';

const create = async (req, res) => {
    try {
        const { name, username, email, password, avatar } = req.body;

        if (!name || !username || !email || !password || !avatar) {
            res.status(400).json({ message: "Submit all fields for registration" })
        }

        const user = await userService.create(req.body);

        if (!user) {
            return res.status(400).send({ message: "Error creating user" })
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
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const findAll = async (req, res) => {
    try {
        const users = await userService.findAll();

        if (users.length === 0) {
            return res.status(400).send({ message: "There are no registered users" })
        }

        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findById = async (req, res) => {
    try {
        const user = req.user;
        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar } = req.body;

        if (!name && !username && !email && !password && !avatar) {
            res.status(400).json({ message: "Submit at least one field for update" });
        }

        const { id, user } = req;

        await userService.update(
            id,
            name,
            username,
            email,
            password,
            avatar
        )

        res.send({ message: "User sucessfully updated" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export default { create, findAll, findById, update }