const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articleRoute.js");
// const cors = require("cors");

const app = express();
// app.use(cors());

// connecter l'application a la base de donnees mongoDb
mongoose.connect("mongodb://localhost:27017/Shop");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connexion etablie"));

app.use(express.json());
// app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json())

app.use("/articles", articleRouter);

// lancer le serveur sur le port 3001
app.listen(3001, () => console.log("Le server ecoute sur le port : 3001"));
