import Post from "../models/Post.js";

const create = (body) => Post.create(body);

const findAll = (offset, limit) => Post.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countPost = () => Post.countDocuments();

export default {
    create,
    findAll,
    countPost
}