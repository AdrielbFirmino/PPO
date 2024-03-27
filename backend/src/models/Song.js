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
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Song = mongoose.model("Song", SongSchema);

export default Song;