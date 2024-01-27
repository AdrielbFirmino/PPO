import postService from '../services/post.service.js'

const create = async (req, res) => {
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
}

const findAll = async (req, res) => {
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
}

const topPosts = async (req, res) => {
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
}

export { create, findAll, topPosts }