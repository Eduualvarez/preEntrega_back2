import { Router } from "express";
import { cartController } from "../controllers/cart.controller.js";
import { authRole } from "../middlewares/authRole.middleware.js";
import { passportCall } from "../middlewares/passportCall.middleware.js";
const router = Router()

router.post("/", cartController.createCart); //crea un carrito 
  
  router.get("/:cid", cartController.getCartById); //obriene un carrito por id
  
  router.post("/:cid/product/:pid",passportCall("jwt"),authRole(["user"]), cartController.addProductToCart); //agrega un producto al carrito

  router.delete("/:cid/product/:pid", cartController.deleteProductToCart); //borra un producto de el carrito
  
  router.put("/:cid/product/:pid", cartController.updateQuantityProductInCart); //actuliza la cantidad de un producto
  
  router.delete("/:cid", cartController.clearProductsToCart); //borra los porductos del carrito 

  router.get("/:cid/purchase", cartController.purchaseCart) // los productos que tienen stock se quitan, los que no tienen se quedan en el carrito actuializado, se genera un tiket de compra
  
  export default router;
  