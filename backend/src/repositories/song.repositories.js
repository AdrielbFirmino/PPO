import Song from "../models/Song.js";

const createSongRepository = (body) => Song.create(body);

async function addLikeRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }
        if (!song.likes.includes(userId)) {
            song.likes.push(userId);
            song.likesCount++;
            await song.save();
            return song;
        } else {
            throw new Error('User already liked this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

const findAllSongsRepository = (offset, limit) =>
    Song.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("author");

const countSong = () => Song.countDocuments();

const recentSongsRepository = () => Song.findOne().sort({ _id: -1 }).populate("author");

const searchSongByNameRepository = (name) =>
    Song.find({
        name: { $regex: `${name || ""}`, $options: "i" }
    })
        .sort({ _id: -1 })
        .populate("author");

const findSongsByUserIdRepository = (id) => Song.find({ author: id }).sort({ _id: -1 }).populate("author");

const findSongByIdRepository = (id) => Song.findById(id).populate("author");

const updateSongRepository = (id, name, image, spotifyLink) => Song.findOneAndUpdate({ _id: id }, { name, image, spotifyLink }, { rawResult: true });

async function removeLikeRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }

        const index = song.likes.indexOf(userId);
        if (index !== -1) {
            song.likes.splice(index, 1);
            song.likesCount--;
            await song.save();
            return song;
        } else {
            throw new Error('User has not liked this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

const eraseSongRespository = (id) => Song.findByIdAndDelete({ _id: id });

async function addHappyFeelRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }
        if (!song.happyFeel.includes(userId)) {
            song.happyFeel.push(userId);
            song.happyCount++;
            await song.save();
            return song;
        } else {
            throw new Error('User already give a happy feel to this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeHappyFeelRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }

        const index = song.happyFeel.indexOf(userId);
        if (index !== -1) {
            song.happyFeel.splice(index, 1);
            song.happyCount--;
            await song.save();
            return song;
        } else {
            throw new Error('User has not add a happy feel to this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function addSadFeelRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }
        if (!song.sadFeel.includes(userId)) {
            song.sadFeel.push(userId);
            song.sadCount++;
            await song.save();
            return song;
        } else {
            throw new Error('User already give a sad feel to this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeSadFeelRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }

        const index = song.sadFeel.indexOf(userId);
        if (index !== -1) {
            song.sadFeel.splice(index, 1);
            song.sadCount--;
            await song.save();
            return song;
        } else {
            throw new Error('User has not add a sad feel to this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function addLoveFeelRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }
        if (!song.loveFeel.includes(userId)) {
            song.loveFeel.push(userId);
            song.loveCount++;
            await song.save();
            return song;
        } else {
            throw new Error('User already give a love feel to this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeLoveFeelRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }

        const index = song.loveFeel.indexOf(userId);
        if (index !== -1) {
            song.loveFeel.splice(index, 1);
            song.loveCount--;
            await song.save();
            return song;
        } else {
            throw new Error('User has not add a love feel to this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function addRelaxFeelRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }
        if (!song.relaxFeel.includes(userId)) {
            song.relaxFeel.push(userId);
            song.relaxCount++;
            await song.save();
            return song;
        } else {
            throw new Error('User already give a relax feel to this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeRelaxFeelRepository(songId, userId) {
    try {
        const song = await Song.findById(songId);
        if (!song) {
            throw new Error('Song not found');
        }

        const index = song.relaxFeel.indexOf(userId);
        if (index !== -1) {
            song.relaxFeel.splice(index, 1);
            song.relaxCount--;
            await song.save();
            return song;
        } else {
            throw new Error('User has not add a relax feel to this song');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export default {
    createSongRepository,
    findAllSongsRepository,
    countSong,
    recentSongsRepository,
    searchSongByNameRepository,
    findSongsByUserIdRepository,
    findSongByIdRepository,
    updateSongRepository,
    eraseSongRespository,
    addHappyFeelRepository,
    addSadFeelRepository,
    addLoveFeelRepository,
    removeLoveFeelRepository,
    addRelaxFeelRepository,
    removeLikeRepository,
    addLikeRepository,
    removeHappyFeelRepository,
    removeSadFeelRepository,
    removeRelaxFeelRepository
}