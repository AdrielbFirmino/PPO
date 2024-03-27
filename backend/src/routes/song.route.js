import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { create,
    findAll, 
    recentSongs, 
    searchSongByName,
    byUser,
    findById,
} from '../controllers/song.controller.js';

const songRouter = Router();

songRouter.post("/create", authMiddleware, create);
songRouter.get("/", findAll);
songRouter.get("/recent", recentSongs);
songRouter.get("/search", searchSongByName);
songRouter.get("/byUser", authMiddleware, byUser);
songRouter.get("/byIdSong/:id", authMiddleware, findById);

export default songRouter;