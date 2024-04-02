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

const updateSongRepository = (id, name, image) => Song.findOneAndUpdate({ _id: id }, { name, image }, { rawResult: true });

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

const addHappyFeelRepository = (idSong, userId) => Song.findOneAndUpdate(
    { _id: idSong, "happyFeel.userId": { $nin: [userId] } },
    { $push: { happyFeel: { userId, created: new Date() } } }
);

const eraseHappyFeelRepository = (idSong, userId) => Song.findOneAndUpdate(
    { _id: idSong },
    { $pull: { happyFeel: { userId } } }
);

const addSadFeelRepository = (idSong, userId) => Song.findOneAndUpdate(
    { _id: idSong, "sadFeel.userId": { $nin: [userId] } },
    { $push: { sadFeel: { userId, created: new Date() } } }
);

const eraseSadFeelRepository = (idSong, userId) => Song.findOneAndUpdate(
    { _id: idSong },
    { $pull: { sadFeel: { userId } } }
);

const addLoveFeelRepository = (idSong, userId) => Song.findOneAndUpdate(
    { _id: idSong, "loveFeel.userId": { $nin: [userId] } },
    { $push: { loveFeel: { userId, created: new Date() } } }
);

const eraseLoveFeelRepository = (idSong, userId) => Song.findOneAndUpdate(
    { _id: idSong },
    { $pull: { loveFeel: { userId } } }
);

const addRelaxFeelRepository = (idSong, userId) => Song.findOneAndUpdate(
    { _id: idSong, "relaxFeel.userId": { $nin: [userId] } },
    { $push: { relaxFeel: { userId, created: new Date() } } }
);

const eraseRelaxFeelRepository = (idSong, userId) => Song.findOneAndUpdate(
    { _id: idSong },
    { $pull: { relaxFeel: { userId } } }
);

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
    eraseHappyFeelRepository,
    addSadFeelRepository,
    eraseSadFeelRepository,
    addLoveFeelRepository,
    eraseLoveFeelRepository,
    addRelaxFeelRepository,
    eraseRelaxFeelRepository,
    removeLikeRepository,
    addLikeRepository
}