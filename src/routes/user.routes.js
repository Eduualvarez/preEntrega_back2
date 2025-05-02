import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { userExist } from "../middlewares/existUser.middleware.js";
import { authRole } from "../middlewares/authRole.middleware.js";
const router = Router();

router.get("/", userController.getAll);

router.post("/", userController.create);

router.get("/:id", userExist, userController.getOneById);

router.delete("/:id",authRole(["admin"]), userExist, userController.delete);

router.put("/:id",authRole(["admin"]), userExist, userController.update);

export default router;