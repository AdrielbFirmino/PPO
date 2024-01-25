import User from '../models/User.js';

const create = (body) => User.create(body);

const findAll = () => User.find();

const findById = (id) => User.findById(id);

const update = (
    id,
    name,
    username,
    email,
    password,
    avatar
) => User.findOneAndUpdate(
    {_id: id},
    {name, username, email, password, avatar}
    );

export default {
    create,
    findAll,
    findById,
    update
};