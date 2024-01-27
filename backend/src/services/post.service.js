import Post from "../models/Post.js";

const create = (body) => Post.create(body);

const findAll = (offset, limit) => 
 Post.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countPost = () => Post.countDocuments();

const topPosts = () => Post.findOne().sort({ _id: -1 }).populate("user");

const findById = (id) => Post.findById(id).populate("user");

const searchByTitle = (title) =>
 Post.find({
    title: { $regex: `${title || ""}`, $options: "i" }
})
 .sort({ _id: -1 })
 .populate("user");

const byUser = (id) => Post.find({user: id}).sort({ _id: -1 }).populate("user");

const update = (id, title, body) => Post.findOneAndUpdate({_id: id},{title, body},{rawResult:true});

const erase = (id) => Post.findByIdAndDelete({_id: id});

export default {
    create,
    findAll,
    countPost,
    topPosts,
    findById,
    searchByTitle,
    byUser,
    update,
    erase
}