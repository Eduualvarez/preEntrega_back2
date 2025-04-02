import passport from "passport";
import { Strategy } from "passport-local";
import { userDao } from "../../persistance/mongo/dao/user.dao";
import { comparePassword, hashPassword } from "../../utils/hashPassword";
import { cartDao } from "../../persistance/mongo/dao/cart.dao";


const registerStrategy = new Strategy(
    {passReqToCallback: true, usernameField: "email"},
    async (req, username, password, done) => {
        try {
            
            const user = await userDao.getOne({email: username});
            if(user) return done(null, false, {message:`el usuario ya existe`})
            const newCart = await cartDao.create();

            const newUser = {
                ...req.body,
                password: hashPassword(password),
                cart: newCart._id,
            };

            const userCreate = await userDao.create(newUser);
            return done(null, userCreate)
        } catch (error) {
            done(error)
        }
    }
);
passport.use("register", registerStrategy);


const loginStrategy = new Strategy({usernameField: "email"}, async (username, password, done) => {
    try {
        const user = await userDao.getOne({email: username});
        if(!user || !comparePassword(user.password, password)){
            return done(null, false, {message: `email o password invalidos`})};
        return done(null, user)
    } catch (error) {
        done(error)
    }
    
});

passport.use("login", loginStrategy);

passport.serializeUser((user, done)=>{
    done(null, user._id)

});

passport.deserializeUser(async (id, done ) => {
    try {
        const user = await userDao.getOne({_id: id})
        done(null, user)
    } catch (error) {
        done(error);
    }
    
});