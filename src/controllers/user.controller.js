import {request, response} from "express"
import { userDao } from "../persistance/mongo/dao/user.dao.js"

class UserController {
    async getAll(req = request,res = response){
        try {
           const users =  await userDao.getAll()
           console.log(users)
            res.status(200).json({ status: "ok", users });
          } catch (error) {
            
            res.status(500).json({ status: "error", message: "Internal Server Error" });
          }
    }
    async getOneById(req = request, res = response){
        try {
            const user = await userDao.getOne({_id: req.params.id})
            res.status(200).json({ status: "ok", user });
          } catch (error) {
            console.log(error);
            res.status(500).json({ status: "error", message: "Internal Server Error" });
          }
    }
    async create(req = request, res = response){
        try {
            
            const user = await userDao.create(req.body);
            res.status(201).json({ status: "ok", user });
          } catch (error) {
            console.log(error);
            res.status(500).json({ status: "error", message: "Internal Server Error" });
          }
    }
    async update(req = request, res = response){
        try {
            const userUpdate = await userDao.update(req.params.id, req.body);
            res.status(200).json({ status: "ok", userUpdate });
          } catch (error) {
            console.log(error);
            res.status(500).json({ status: "error", message: "Internal Server Error" });
          }
    }
    async delete(req = request, res = response){
        try {
            await userDao.remove(req.params.id);
            res.status(200).json({ status: "ok", message: `User id ${req.params.id} remove` });
          } catch (error) {
            console.log(error);
            res.status(500).json({ status: "error", message: "Internal Server Error" });
          }
    }
};

export const userController = new UserController()