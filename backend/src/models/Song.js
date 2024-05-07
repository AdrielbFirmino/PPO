import mongoose from 'mongoose';
import { type } from 'os';

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
    happyCount: {
        type: Number,
        default: 0
    },
    sadFeel: {
        type: Array,
        required: true
    },
    sadCount: {
        type: Number,
        default: 0
    },
    loveFeel: {
        type: Array,
        required: true
    },
    loveCount: {
        type: Number,
        default: 0
    },
    relaxFeel: {
        type: Array,
        required: true
    },
    relaxCount: {
        type: Number,
        default: 0
    },
    likes: {
        type: Array,
        required: true
    },
    likesCount: {
        type: Number,
        default: 0
    },
    spotifyLink: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Song = mongoose.model("Song", SongSchema);

export default Song;