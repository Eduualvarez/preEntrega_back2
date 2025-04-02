import express from "express"
import { mongoDB_Connection } from "./config/mongoDB.connection.js";
import { config } from "./config/envs.config.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import router from "./routes/router.js";
import session from "express-session";

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

await mongoDB_Connection()
const PORT = config.PORT

app.use(
    session({
      secret: config.SESSION_SECRET,
      resave: true, // Evita guardar la sesión si no hay cambios
      saveUninitialized: true, // Guarda sesiones vacías
      cookie: { secure: false, maxAge: 500000 }, // Debe estar en true si usas HTTPS
    })
  );

app.use(cookieParser())
app.use(passport.initialize())
app.use('/api', router)
app.listen(process.env.PORT,() => {
    console.log(`http://localhost:${PORT}`)
})