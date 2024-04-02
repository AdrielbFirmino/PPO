import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    happyFeel: {
        type: Array,
        required: true
    },
    sadFeel: {
        type: Array,
        required: true
    },
    loveFeel: {
        type: Array,
        required: true
    },
    relaxFeel: {
        type: Array,
        required: true
    },
    likes: {
        type: Array,
        required: true
    },
    likesCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Song = mongoose.model("Song", SongSchema);

export default Song;