import songRepositories from "../repositories/song.repositories.js";

async function createSongService(corpo) {
    const { name, image, userId } = corpo;
    console.log(corpo);
    if (!image || !name)
        throw new Error("Submit all fields to post your song.");

    const { id } = await songRepositories.createSongRepository({
        name,
        image,
        author: userId
    })

    return {
        message: "Song created successfully!",
        song: { id, name, image },
    };
};

async function findAllSongsService(limit, offset, currentUrl) {
    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
        limit = 5;
    }
    if (!offset) {
        offset = 0;
    }

    const songs = await songRepositories.findAllSongsRepository(offset, limit);
    const total = await songRepositories.countSong();

    const next = offset + limit;
    const nextUrl =
        next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl =
        previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

    if (songs.length === 0) {
        return res.status(400).send({ message: "There are no songs available" })
    }

    return {
        nextUrl,
        previousUrl,
        limit,
        offset,
        total,
        results: songs.map(songItem => ({
            id: songItem._id,
            name: songItem.name,
            image: songItem.image,
            authorName: songItem.author.name,
            authorAvatar: songItem.author.avatar,
            happyFeel: songItem.happyFeel,
            sadFeel: songItem.sadFeel,
            loveFeel: songItem.loveFeel,
            relaxFeel: songItem.relaxFeel
        }))
    }
};

async function recentSongsService() {
    const song = await songRepositories.recentSongsRepository();

    if (!song) {
        return res.status(400).send({ message: "There are no songs available" });
    }
    return {
        song: {
            id: song._id,
            name: song.name,
            image: song.image,
            authorname: song.author.name,
            authorAvatar: song.author.avatar,
            happyFeel: song.happyFeel,
            sadFeel: song.sadFeel,
            loveFeel: song.loveFeel,
            relaxFeel: song.relaxFeel,
        }
    }
};

async function searchSongByNameService(name) {
    const song = await songRepositories.searchSongByNameRepository(name);

    if (song.length == 0) {
        return res.status(400).send({ message: "There are no songs with this title" });
    }
    return {
        results: song.map(songItem => ({
            id: songItem._id,
            name: songItem.name,
            image: songItem.image,
            authorName: songItem.author.name,
            authorAvatar: songItem.author.avatar,
            happyFeel: songItem.happyFeel,
            sadFeel: songItem.sadFeel,
            loveFeel: songItem.loveFeel,
            relaxFeel: songItem.relaxFeel
        }))
    }
};

async function findSongsByUserIdService(id) {
    const songs = await songRepositories.findSongsByUserIdRepository(id);

    return {
        results: songs.map(songItem => ({
            id: songItem._id,
            name: songItem.name,
            image: songItem.image,
            authorName: songItem.author.name,
            authorAvatar: songItem.author.avatar,
            happyFeel: songItem.happyFeel,
            sadFeel: songItem.sadFeel,
            loveFeel: songItem.loveFeel,
            relaxFeel: songItem.relaxFeel
        }))
    }
}

async function findSongByIdService(id) {
    const song = await songRepositories.findSongByIdRepository(id);

    if (!song) throw new Error("Song not found");

    return {
        id: song._id,
        name: song.name,
        image: song.image,
        authorName: song.author.name,
        authorAvatar: song.author.avatar,
        happyFeel: song.happyFeel,
        sadFeel: song.sadFeel,
        loveFeel: song.loveFeel,
        relaxFeel: song.relaxFeel
    }
};

async function updateSongService(id, name, image, userId) {
    if (!name && !image)
        throw new Error("Submit at least one field to update the song");
    const song = await songRepositories.findSongByIdRepository(id);
    if (song.author._id != userId)
        throw new Error("You cannot update this song");
    await songRepositories.updateSongRepository(id, name, image)
};

async function eraseSongService(id, userId) {
    const song = await songRepositories.findSongByIdRepository(id)
    if (song.author._id != userId)
        throw new Error("You cannot delete this song");
    await songRepositories.eraseSongRespository(id);
};

export default {
    createSongService,
    findAllSongsService,
    recentSongsService,
    searchSongByNameService,
    findSongsByUserIdService,
    findSongByIdService,
    updateSongService,
    eraseSongService
}