import postService from '../services/post.service.js'

export const create = async (req, res) => {
    try {
        const { title, body } = req.body;

        if (!title || !body) {
            return res.status(400).send({ message: "Submit all fields to post" })
        }

        await postService.create({
            title,
            body,
            user: req.userId
        })

        res.send(201)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const findAll = async (req, res) => {
    try {
        let { limit, offset } = req.query;

        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }
        if (!offset) {
            offset = 0;
        }

        const post = await postService.findAll(offset, limit);
        const total = await postService.countPost();
        const currentUrl = req.baseUrl

        const next = offset + limit;
        const nextUrl =
            next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl =
            previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

        if (post.length === 0) {
            return res.status(400).send({ message: "There are no posts available" })
        }
        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
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
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const topPosts = async (req, res) => {
    try {
        const post = await postService.topPosts();

        if (!post) {
            return res.status(400).send({ message: "There are no posts available" });
        }

        res.send({
            id: post._id,
            title: post.title,
            body: post.body,
            likes: post.likes,
            comments: post.comments,
            name: post.user.name,
            userName: post.user.username,
            userAvatar: post.user.avatar
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const findById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postService.findById(id)

        return res.send({
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
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const searchByTitle = async (req, res) => {
    try {
        const { title } = req.query;

        const post = await postService.searchByTitle(title);

        if (post.length == 0) {
            return res.status(400).send({ message: "There are no posts with this title" });
        }
        return res.send({
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
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const byUser = async (req, res) => {
    try {
        const id = req.userId;
        const post = await postService.byUser(id);

        return res.send({
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
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const update = async (req, res) => {
    try {
        const { title, body } = req.body;
        const { id } = req.params;

        if (!title && !body) {
            return res.status(400).send({
                message: "Submit at least one field to update the post"
            })
        }

        const post = await postService.findById(id)
        if (post.user._id != req.userId) {
            return res.status(400).send({ message: "You cannot create this post" })
        }

        await postService.update(id, title, body);

        return res.status(200).send({ message: "Post sucessfuly updated!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const erase = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postService.findById(id)
        if (post.user._id != req.userId) {
            return res.status(400).send({ message: "You cannot delete this post" })
        }

        await postService.erase(id);
        return res.status(200).send({ message: "Post sucessfuly deleted!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;

        const postLiked = await postService.likePost(id, userId);

        if (!postLiked) {
            await postService.deleteLikePost(id, userId);
            return res.status(200).send({ message: "like removed successfully!" });
        }

        res.status(200).send({ message: "Like done successfully!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const addComment = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const {text} = req.body;

        if (!text) {
            return res.status(400).send({ message: "Comment body can't be empty." });
        }
        if (!id) {
            return res.status(404).send({
                message: `Post with ID: ${id} does not exist in database.`,
            });
        }
        if (!userId) {
            return res
                .status(404)
                .send({ message: "User does not exist in database." });
        }

        await postService.addComment(id, userId, text);

        res.status(200).send({message: "Your comment was successfully added!"});
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const deleteComment = async (req, res) => {
    try {
        const { idPost, idComment } = req.params;
        const userId = req.userId;

        const commentDeleted = await postService.deleteComment(
            idPost,
            idComment,
            userId
        );

        const commentFinder = commentDeleted.comments.find(
            (comment) => comment.idComment === idComment
        );

        if(!commentFinder) {
            return res.status(404).send({message: "Comment not found"})
        }

        if(commentFinder.userId !== userId) {
            return res.status(400).send({message: "You can't delete this comment"})
        }

        res.status(200).send({message: "Your comment was successfully removed!"});
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};