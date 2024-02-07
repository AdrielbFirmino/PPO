import Post from "../models/Post.js";

const createPostRepository = (body) => Post.create(body);

const findAllPostsRepository = (offset, limit) =>
    Post.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countPost = () => Post.countDocuments();

const topPostsRepository = () => Post.findOne().sort({ _id: -1 }).populate("user");

const findPostByIdRepository = (id) => Post.findById(id).populate("user");

const searchPostByTitleRepository = (title) =>
    Post.find({
        title: { $regex: `${title || ""}`, $options: "i" }
    })
        .sort({ _id: -1 })
        .populate("user");

const findPostsByUserIdRepository = (id) => Post.find({ user: id }).sort({ _id: -1 }).populate("user");

const updatePostRepository = (id, title, body) => Post.findOneAndUpdate({ _id: id }, { title, body }, { rawResult: true });

const erasePostRespository = (id) => Post.findByIdAndDelete({ _id: id });

const likePostRepository = (idPost, userId) => Post.findOneAndUpdate(
    { _id: idPost, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, created: new Date() } } }
);

const deleteLikePostRepository = (idPost, userId) => Post.findOneAndUpdate(
    { _id: idPost },
    { $pull: { likes: { userId } } }
);

const addCommentRepository = (idPost, userId, body) => {
    const idComment = Math.floor(Date.now() * Math.random()).toString(36);

    return Post.findOneAndUpdate(
        { _id: idPost },
        { $push: { comments: { idComment, userId, body, createdAt: new Date() } } }
    )
};

const deleteCommentRepository = (idPost, idComment, userId) =>
    Post.findOneAndUpdate({ _id: idPost }, { $pull: { comments: { idComment, userId } } }
    );

export default {
    createPostRepository,
    findAllPostsRepository,
    countPost,
    topPostsRepository,
    findPostByIdRepository,
    searchPostByTitleRepository,
    findPostsByUserIdRepository,
    updatePostRepository,
    erasePostRespository,
    likePostRepository,
    deleteLikePostRepository,
    addCommentRepository,
    deleteCommentRepository
}