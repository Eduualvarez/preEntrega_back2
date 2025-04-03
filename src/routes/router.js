import { Router } from "express";
import authRouter from './auth.routes.js'
import userRouter from './user.routes.js'
import cartRouter from './cart.routes.js'
import productRouter from './product.routes.js'
const router = Router()

router.use("/auth",authRouter);
router.use("/users",userRouter)
router.use('/carts', cartRouter)
router.use('/products', productRouter)


export default router;