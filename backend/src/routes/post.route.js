import {Router} from 'express';
import { 
    create,
    findAll, 
    topPosts, 
    findById, 
    searchByTitle, 
    byUser,
    update,
    erase,
    addComment,
    deleteComment,
    addLike,
    removeLike
} from '../controllers/post.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const postRouter = Router();

postRouter.post("/create", authMiddleware, create);
postRouter.post('/like', authMiddleware, addLike);
postRouter.get("/", findAll);
postRouter.get("/top", topPosts);
postRouter.get("/search", searchByTitle);
postRouter.get("/byUser", authMiddleware, byUser);
postRouter.get("/byIdPost/:id", authMiddleware, findById);
postRouter.patch("/update/:id", authMiddleware, update);
postRouter.delete('/like', authMiddleware, removeLike);
postRouter.delete("/delete/:id", authMiddleware, erase);
postRouter.patch("/comment/:id", authMiddleware, addComment);
postRouter.patch("/comment/:idPost/:idComment", authMiddleware, deleteComment);

export default postRouter;