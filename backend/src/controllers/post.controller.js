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
            user: { _id: "65b317f9605128d35d4acb7c" }
        })

        res.send(201)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findAll = async (req, res) => {
    try {
        const post = await postService.findAll();
        if (post.length === 0) {
            return res.status(400).send({ message: "There are no posts available" })
        }
        res.send(post)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export { create, findAll }