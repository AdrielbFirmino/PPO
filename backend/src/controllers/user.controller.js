import userService from '../services/user.service.js';

const create = async (req, res) => {
    const body = req.body;
    try {
        const user = await userService.createUserService(body);
        return res.status(201).send(user)
    } catch (err) {
        return res.status(500).send(err.message)
    }
};

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllUserService();
        return res.send(users)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const findById = async (req, res) => {
    const {id: userId} = req.params;
    const userIdLogged = req.userId;
    try {
        const user = await userService.findUserByIdService(userId, userIdLogged);
        return res.send(user);
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar } = req.body;
        const { id: userId } = req.params;
        const userIdLogged = req.userId;
        
        const response = await userService.updateUserService(
          { name, username, email, password, avatar },
          userId,
          userIdLogged
        );
    
        return res.send(response);
      } catch (err) {
        res.status(500).send({ message: err.message})
    }
};

export default { create, findAll, findById, update }