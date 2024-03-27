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

export default {
    createSongRepository,
    findAllSongsRepository,
    countSong,
    recentSongsRepository,
    searchSongByNameRepository,
    findSongsByUserIdRepository,
    findSongByIdRepository,
    updateSongRepository,
    eraseSongRespository
}