import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { create,
    findAll, 
    recentSongs, 
    searchSongByName,
    byUser,
    findById,
    update,
    erase,
} from '../controllers/song.controller.js';

const songRouter = Router();

songRouter.post("/create", authMiddleware, create);
songRouter.get("/", findAll);
songRouter.get("/recent", recentSongs);
songRouter.get("/search", searchSongByName);
songRouter.get("/byUser", authMiddleware, byUser);
songRouter.get("/byIdSong/:id", authMiddleware, findById);
songRouter.patch("/update/:id", authMiddleware, update);
songRouter.delete("/delete/:id", authMiddleware, erase);

export default songRouter;