import Song from "../models/Song.js";

const createSongRepository = (body) => Song.create(body);

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
    eraseRelaxFeelRepository
}