import { userDao } from "../persistance/mongo/dao/user.dao.js";

export const userExist = async (req,res,next) => {
    const user = await userDao.getOne({_id: req.params.id});
    if(!user) return res.status(404).send({status: `error`,message: `user not found`});

    next()
}