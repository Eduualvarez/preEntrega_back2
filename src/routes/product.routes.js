import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

import {editProductSchema} from '../schemas/products.schema.js'
import {productController} from "../controllers/product.controller.js"

const router = Router();

router.get("/", productController.getAllProducts);

router.get("/:pid",productController.getById);

router.delete("/:pid",productController.deleteOne);

router.put("/", validateSchema(editProductSchema),productController.updateProduct);

router.post("/",  productController.createProduct);

export default router;
