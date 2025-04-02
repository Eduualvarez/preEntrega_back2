import {userDao} from '../persistance/mongo/dao/user.dao.js';
import { verifyToken } from '../utils/jwt.js';

export const checkTokenCookie = async (req, res, next) => {
    try {
     const token = req.cookies.token;
        if (!token) return res.status(401).send({message: `token inexistente `})
            
     const decoded = verifyToken(token);
     const user =  await userDao.getOne({_id: decoded.id});
     if (!user) {
         return res.status(401).send({message: `usuario no encontrado `})
        };
     
        req.user = user;
        next()
       
   } catch (error) {
    res.status(401).send({message: error.message})

}};
