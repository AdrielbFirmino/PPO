import Post from "../models/Post.js";

const create = (body) => Post.create(body);

const findAll = (offset, limit) => Post.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countPost = () => Post.countDocuments();

const topPosts = () => Post.findOne().sort({ _id: -1 }).populate("user");

const findById = (id) => Post.findById(id).populate("user")

const searchByTitle = (title) =>
 Post.find({
    title: { $regex: `${title || ""}`, $options: "i" }
})
 .sort({ _id: -1 })
 .populate("user")

export default {
    create,
    findAll,
    countPost,
    topPosts,
    findById,
    searchByTitle
}