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
    removeLike,
    removeHappyFeel,
    removeSadFeel,
    removeLoveFeel,
    removeRelaxFeel
} from '../controllers/song.controller.js';

const songRouter = Router();

songRouter.post("/create", authMiddleware, create);
songRouter.post('/like', authMiddleware, addLike);
songRouter.post("/happyFeel", authMiddleware, addHappyFeel);
songRouter.post("/sadFeel", authMiddleware, addSadFeel);
songRouter.post("/loveFeel", authMiddleware, addLoveFeel);
songRouter.post("/relaxFeel", authMiddleware, addRelaxFeel);
songRouter.get("/", findAll);
songRouter.get("/recent", recentSongs);
songRouter.get("/search", searchSongByName);
songRouter.get("/byUser", authMiddleware, byUser);
songRouter.get("/byIdSong/:id", authMiddleware, findById);
songRouter.patch("/update/:id", authMiddleware, update);
songRouter.delete('/like/:songId', authMiddleware, removeLike);
songRouter.delete("/delete/:id", authMiddleware, erase);
songRouter.delete("/happyFeel/:songId", authMiddleware, removeHappyFeel);
songRouter.delete("/sadFeel/:songId", authMiddleware, removeSadFeel);
songRouter.delete("/loveFeel/:songId", authMiddleware, removeLoveFeel);
songRouter.delete("/relaxFeel/:songId", authMiddleware, removeRelaxFeel);

export default songRouter;