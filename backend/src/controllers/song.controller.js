import songService from '../services/song.service.js'

export const create = async (req, res) => {
    const { name, image } = req.body;
    const userId = req.userId;
    try {
        const post = await songService.createSongService({
            name,
            image,
            userId
        })
        return res.status(201).send(post);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const findAll = async (req, res) => {
    let { limit, offset } = req.query;
    const currentUrl = req.baseUrl
    try {
        const songs = await songService.findAllSongsService(limit, offset, currentUrl);
        return res.send(songs);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const recentSongs = async (req, res) => {
    try {
        const song = await songService.recentSongsService();
        return res.send(song);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const searchSongByName = async (req, res) => {
    const { name } = req.query;
    try {
        const song = await songService.searchSongByNameService(name);
        return res.send(song);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const byUser = async (req, res) => {
    const id = req.userId;
    try {
        const song = await songService.findSongsByUserIdService(id);
        return res.send(song)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const findById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await songService.findSongByIdService(id)
        return res.send(post)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};