import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { authRole } from "../middlewares/authRole.middleware.js";
import {editProductSchema} from '../schemas/products.schema.js'
import {productController} from "../controllers/product.controller.js"

const router = Router();

router.get("/", productController.getAllProducts);

router.get("/:pid",productController.getById);

router.delete("/:pid",authRole(["admin"]),productController.deleteOne);

router.put("/", validateSchema(editProductSchema),authRole(["admin"]),productController.updateProduct);

router.post("/", authRole(["admin"]), productController.createProduct);

export default router;
