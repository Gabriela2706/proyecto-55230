import express from "express";
import mongoose from "mongoose";
import cartRoute from "./routers/APIRoute/cartRoute.js";
import productRoute from "./routers/APIRoute/productRoute.js";
import userRoute from "./routers/APIRoute/userRoute.js";
import userViewsRoute from "./routers/viewsRoute/userViews.js";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import session from "express-session";
import initLocalStrategy from "./config/passportConfig.js";
import passport from "passport";
import __dirname from "./dirname.js";
import handlebars from "express-handlebars";
import config from "./config/config.js";
import { Server as SocketServer } from "socket.io";
import productViewsRoute from "./routers/viewsRoute/productViews.js";
import cartViewsRoute from "./routers/viewsRoute/cartViews.js";

const app = express();

//CONEXION CON MONGOOSE ATLAS
const conexionMongoose = await mongoose.connect(config.MONGO_URL);

//SETEO DE HANDLEBARS
app.engine("handlebars", handlebars.engine()); // se setea el motor de vistas
app.set("views", `${__dirname}/views`); // le digo donde van a estar las vistas
app.set("view engine", "handlebars"); // aca le digo cual es el motor que se va a utilizar para leer esas vistas

//RUTAS DE EXPRESS
//API
app.use("/api/cart", cartRoute);
app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
//VISTAS
app.use("/user", userViewsRoute);
app.use("cart", cartViewsRoute);
app.use("product", productViewsRoute);

//CONTENIDO ESTATICO
app.use(express.static(`${__dirname}/public`));

//USO DE MIDDLWARES
app.use(express.urlencoded({ extended: true })); //Esto me sirve para req.query para transformar el texto plano a objeto
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,

    store: new MongoStore({
      mongoUrl: config.MONGO_URL,
      ttl: 3000,
    }),
    ttl: 3000,
  })
);

//INICIALIZACION DE PASSPORT
initLocalStrategy();
app.use(passport.initialize());
app.use(passport.session());

//INICIALIZACION DE EXPRESS
const appServer = app.listen(config.PORT, () => {
  console.log("servidor corriendo");
});

//SOCKET IO
//ENVOLTORIO DE SOCKET IO
const io = new SocketServer(appServer);
//
io.on("connection", async (SocketServer) => {
  console.log(`Cliente con id: ${SocketServer.id} se ha conectado`);
});
