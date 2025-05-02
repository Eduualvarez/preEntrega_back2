import { Router } from "express";

import { passportCall } from "../middlewares/passportCall.middleware.js";
import { loginSchema } from "../schemas/login.schema.js";
import { registerSchema } from "../schemas/register.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { authRole } from "../middlewares/authRole.middleware.js";
import { authController } from "../controllers/auth.controller.js";

const router = Router()
router.post("/login",validateSchema(loginSchema), passportCall("login"), authController.loginUser);
  
router.post("/register", validateSchema(registerSchema), passportCall("register"), authController.registerUser);
    
  
  
router.get("/current", passportCall("jwt"), authRole(["admin", "user"]), authController.currentSession);
  
router.get("/logout",authController.logout);
  
  export default router;