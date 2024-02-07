import { Router } from "express";
const swaggerRouter = Router();

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json" assert {type: "json"}

swaggerRouter.use("/", swaggerUi.serve);
swaggerRouter.get("/", swaggerUi.setup(swaggerDocument));

export default swaggerRouter;