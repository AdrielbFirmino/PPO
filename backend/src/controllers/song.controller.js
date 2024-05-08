import songService from '../services/song.service.js'

export const create = async (req, res) => {
    const { name, image, spotifyLink } = req.body;
    const userId = req.userId;
    try {
        const song = await songService.createSongService({
            name,
            image,
            spotifyLink,
            userId
        })
        return res.status(201).send(song);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const addLike = async (req, res) => {
    const { songId } = req.body;
    const userId = req.userId;
    try {
        const likedSong = await songService.addLikeService(songId, userId);
        res.status(200).send(likedSong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

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

export const update = async (req, res) => {
    const { name, image, spotifyLink } = req.body;
    const { id } = req.params;
    const userId = req.userId;
    try {
        await songService.updateSongService(id, name, image, spotifyLink, userId);
        return res.status(200).send({ message: "Song sucessfuly updated!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const removeLike = async (req, res) => {
    const { songId } = req.params;
    const userId = req.userId;
    try {
        const unlikedSong = await songService.removeLikeService(songId, userId);
        res.status(200).send(unlikedSong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

export const erase = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;
    try {
        await songService.eraseSongService(id, userId);
        return res.status(200).send({ message: "Song sucessfuly deleted!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export const addHappyFeel = async (req, res) => {
    const { songId } = req.body;
    const userId = req.userId;
    try {
        const happySong = await songService.addHappyFeelService(songId, userId);
        res.status(200).send(happySong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export const removeHappyFeel = async (req, res) => {
    const { songId } = req.params;
    const userId = req.userId;
    try {
        const nonHappySong = await songService.removeHappyFeelService(songId, userId);
        res.status(200).send(nonHappySong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

export const addSadFeel = async (req, res) => {
    const { songId } = req.body;
    const userId = req.userId;
    try {
        const sadSong = await songService.addSadFeelService(songId, userId);
        res.status(200).send(sadSong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export const removeSadFeel = async (req, res) => {
    const { songId } = req.params;
    const userId = req.userId;
    try {
        const nonSadSong = await songService.removeSadFeelService(songId, userId);
        res.status(200).send(nonSadSong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

export const addLoveFeel = async (req, res) => {
    const { songId } = req.body;
    const userId = req.userId;
    try {
        const loveSong = await songService.addLoveFeelService(songId, userId);
        res.status(200).send(loveSong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export const removeLoveFeel = async (req, res) => {
    const { songId } = req.params;
    const userId = req.userId;
    try {
        const nonloveSong = await songService.removeLoveFeelService(songId, userId);
        res.status(200).send(nonloveSong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export const addRelaxFeel = async (req, res) => {
    const { songId } = req.body;
    const userId = req.userId;
    try {
        const relaxSong = await songService.addRelaxFeelService(songId, userId);
        res.status(200).send(relaxSong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

export const removeRelaxFeel = async (req, res) => {
    const { songId } = req.params;
    const userId = req.userId;
    try {
        const nonRelaxSong = await songService.removeRelaxFeelService(songId, userId);
        res.status(200).send(nonRelaxSong);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};