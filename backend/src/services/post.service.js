import postRepositories from "../repositories/post.repositories.js";

async function createPostService(corpo) {
    const { title, body, userId } = corpo;
    if (!title || !body)
        throw new Error("Submit all fields to post");

    const { id } = await postRepositories.createPostRepository({
        title,
        body,
        user: userId
    })

    return {
        message: "Post created successfully!",
        post: { id, title, body },
    };
};

async function findAllPostsService(limit, offset, currentUrl) {
    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
        limit = 5;
    }
    if (!offset) {
        offset = 0;
    }

    const posts = await postRepositories.findAllPostsRepository(offset, limit);
    const total = await postRepositories.countPost();

    const next = offset + limit;
    const nextUrl =
        next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl =
        previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

    if (posts.length === 0) {
        return res.status(400).send({ message: "There are no posts available" })
    }

    return {
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,
        results: posts.map(postItem => ({
            id: postItem._id,
            title: postItem.title,
            body: postItem.body,
            likes: postItem.likes,
            comments: postItem.comments,
            name: postItem.user.name,
            userName: postItem.user.username,
            userAvatar: postItem.user.avatar
        }))
    }
};

async function topPostsService() {
    const post = await postRepositories.topPostsRepository();

    if (!post) {
        return res.status(400).send({ message: "There are no posts available" });
    }
    return {
        post: {
            id: post._id,
            title: post.title,
            body: post.body,
            likes: post.likes,
            comments: post.comments,
            name: post.user.name,
            userName: post.user.username,
            userAvatar: post.user.avatar
        }
    }
};

async function findPostByIdService(id) {
    const post = await postRepositories.findPostByIdRepository(id);

    if (!post) throw new Error("Post not found");

    return {
        id: post._id,
        title: post.title,
        body: post.body,
        likes: post.likes,
        comments: post.comments,
        name: post.user.name,
        userName: post.user.username,
        userAvatar: post.user.avatar
    }
};

async function searchPostByTitleService(title) {
    const post = await postRepositories.searchPostByTitleRepository(title);

    if (post.length == 0) {
        return res.status(400).send({ message: "There are no posts with this title" });
    }
    return {
        results: post.map(postItem => ({
            id: postItem._id,
            title: postItem.title,
            body: postItem.body,
            likes: postItem.likes,
            comments: postItem.comments,
            name: postItem.user.name,
            userName: postItem.user.username,
            userAvatar: postItem.user.avatar
        }))
    }
};

async function findPostsByUserIdService(id) {
    const posts = await postRepositories.findPostsByUserIdRepository(id);

    return {
        results: posts.map(postItem => ({
            id: postItem._id,
            title: postItem.title,
            body: postItem.body,
            likes: postItem.likes,
            comments: postItem.comments,
            name: postItem.user.name,
            userName: postItem.user.username,
            userAvatar: postItem.user.avatar
        }))
    }
};

async function updatePostService(id, title, body, userId) {
    if (!title && !body)
        throw new Error("Submit at least one field to update the post");
    const post = await postRepositories.findPostByIdRepository(id);
    if (post.user._id != userId)
        throw new Error("You cannot create this post");
    await postRepositories.updatePostRepository(id, title, body)
};

async function erasePostService(id, userId) {
    const post = await postRepositories.findPostByIdRepository(id)
    if (post.user._id != userId)
        throw new Error("You cannot delete this post");
    await postRepositories.erasePostRespository(id);
};

async function likePostService(id, userId) {
    const postLiked = await postRepositories.likePostRepository(id, userId)
    if (!postLiked) {
        await postRepositories.deleteLikePostRepository(id, userId);
        return { message: "like removed successfully!" };
    }
    return { message: "Like done successfully" };
};

async function addCommentService(id, userId, text) {
    if (!text)
        throw new Error("Comment body can't be empty.");
    if (!id)
        throw new Error(`Post with ID: ${id} does not exist in database.`);
    if (!userId)
        throw new Error("User does not exist in database.");
    await postRepositories.addCommentRepository(id, userId, text);
    return { message: "Comment added!" };
};

async function deleteCommentService(idPost, idComment, userId) {
    const commentDeleted = await postRepositories.deleteCommentRepository(
        idPost,
        idComment,
        userId
    );

    const commentFinder = commentDeleted.comments.find(
        (comment) => comment.idComment === idComment
    );

    if (!commentFinder)
        throw new Error("Comment not found")

    if (commentFinder.userId !== userId)
        throw new Error("You can't delete this comment")

    return { message: "Comment deleted successfully!" }
}

export default {
    createPostService,
    findAllPostsService,
    topPostsService,
    findPostByIdService,
    searchPostByTitleService,
    findPostsByUserIdService,
    updatePostService,
    erasePostService,
    likePostService,
    addCommentService,
    deleteCommentService
}