import postService from '../services/post.service.js'

export const create = async (req, res) => {
    const { title, body } = req.body;
    const userId = req.userId;
    try {
        const post = await postService.createPostService({
            title,
            body,
            userId
        })
        return res.status(201).send(post);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const addLike = async (req, res) => {
    const { postId } = req.body;
    const userId = req.userId;
    try {
        const likedPost = await postService.addLikeService(postId, userId);
        res.status(200).send(likedPost);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

export const findAll = async (req, res) => {
    let { limit, offset } = req.query;
    const currentUrl = req.baseUrl
    try {
        const post = await postService.findAllPostsService(limit, offset, currentUrl);
        return res.send(post);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const topPosts = async (req, res) => {
    try {
        const post = await postService.topPostsService();
        return res.send(post);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const findById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await postService.findPostByIdService(id)
        return res.send(post)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const searchByTitle = async (req, res) => {
    const { title } = req.query;
    try {
        const post = await postService.searchPostByTitleService(title);

        return res.send(post);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const byUser = async (req, res) => {
    const id = req.userId;
    try {
        const post = await postService.findPostsByUserIdService(id);
        return res.send(post)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const update = async (req, res) => {
    const { title, body } = req.body;
    const { id } = req.params;
    const userId = req.userId;
    try {
        await postService.updatePostService(id, title, body, userId);
        return res.status(200).send({ message: "Post sucessfuly updated!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const removeLike = async (req, res) => {
    const { postId } = req.body;
    const userId = req.userId;
    try {
        const unlikedPost = await postService.removeLikeService(postId, userId);
        res.status(200).send(unlikedPost);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

export const erase = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;
    try {
        await postService.erasePostService(id, userId);
        return res.status(200).send({ message: "Post sucessfuly deleted!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const addComment = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;
    const { text } = req.body;
    try {
        const response = await postService.addCommentService(id, userId, text);
        res.send(response);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const deleteComment = async (req, res) => {
    const { idPost, idComment } = req.params;
    const userId = req.userId;
    try {
        const commentDeleted = await postService.deleteCommentService(
            idPost,
            idComment,
            userId
        );
        res.send(commentDeleted);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};