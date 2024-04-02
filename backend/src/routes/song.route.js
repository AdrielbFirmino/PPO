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
    addHappyFeel,
    addSadFeel,
    addLoveFeel,
    addRelaxFeel,
    addLike,
    removeLike
} from '../controllers/song.controller.js';

const songRouter = Router();

songRouter.post("/create", authMiddleware, create);
songRouter.post('/like', authMiddleware, addLike);
songRouter.get("/", findAll);
songRouter.get("/recent", recentSongs);
songRouter.get("/search", searchSongByName);
songRouter.get("/byUser", authMiddleware, byUser);
songRouter.get("/byIdSong/:id", authMiddleware, findById);
songRouter.patch("/update/:id", authMiddleware, update);
songRouter.delete('/like', authMiddleware, removeLike);
songRouter.delete("/delete/:id", authMiddleware, erase);
songRouter.patch("/happyFeel/:id", authMiddleware, addHappyFeel);
songRouter.patch("/sadFeel/:id", authMiddleware, addSadFeel);
songRouter.patch("/loveFeel/:id", authMiddleware, addLoveFeel);
songRouter.patch("/relaxFeel/:id", authMiddleware, addRelaxFeel);

export default songRouter;