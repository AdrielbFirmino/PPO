import Post from "../models/Post.js";

const create = (body) => Post.create(body);

const findAll = () => Post.find();

export default {
    create,
    findAll
}