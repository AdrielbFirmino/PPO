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

async function addLikeRepository(postId, userId) {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        if (!post.likes.includes(userId)) {
            post.likes.push(userId);
            post.likesCount++;
            await post.save();
            return post;
        } else {
            throw new Error('User already liked this post');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeLikeRepository(postId, userId) {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('Song not found');
        }

        const index = post.likes.indexOf(userId);
        if (index !== -1) {
            post.likes.splice(index, 1);
            post.likesCount--;
            await post.save();
            return post;
        } else {
            throw new Error('User has not liked this Post');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

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
    addLikeRepository,
    removeLikeRepository,
    addCommentRepository,
    deleteCommentRepository
}