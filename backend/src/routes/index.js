import { Router } from "express";
import userRouter from "./user.route.js";
import authRouter from "./auth.route.js";
import postRouter from "./post.route.js";
import swaggerRouter from "./swagger.route.js";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/post", postRouter);
router.use("/doc", swaggerRouter)

export default router;