import { request, response } from "express";
import { error_log } from "../utils/error_log.js";
import { createToken } from "../utils/jwt.js";
import { UserDTO } from "../DTO/user.dto.js";

class AuthController{
    async loginUser(req = request, res = response){
        try {
            const tokenData = {
              id: req.user._id,
              email: req.user.email,
              role: req.user.role
            }
             const token = createToken(tokenData)
             res.cookie("token", token, {httpOnly: true});
            res.status(200).json({ user: req.user, token });
          } catch (error) {
            error_log(error, req);
            res.status(500).json({ status: "error", message: "Internal Server Error" });
          }
    };

    async registerUser(req = request, res = response){
        try {
            res.status(201).json({ message: req.user });
          } catch (error) {
            res.status(500).json({ status: "error", message: "Internal Server Error registro" });
          }
    };
    async currentSession(req = request, res = response){
        try {

            const userDTO = new UserDTO(req.user)

            res.status(200).json({ user: userDTO});
          } catch (error) {
            error_log(error, req)
            res.status(500).json({ status: "error", message: "Internal Server Error" });
          }
    }
    async logout(req = request, res = response){
        try {
            req.session.destroy();
            res.status(200).json({ message: "Session cerrada" });
          } catch (error) {
            res.status(500).json({ status: "error", message: "Internal Server Error" });
          }
    }
}//fin de la class

export const authController = new AuthController();
