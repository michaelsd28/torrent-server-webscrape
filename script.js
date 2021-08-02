const express = require("express");
const cron = require("node-schedule");
const https = require("https");
const fs = require("fs");
const app = express();
const cors = require("cors");
const date = new Date();
const path = require("path");

app.use(cors());

const top_movies = require("./Top torrent/Top movies");
const top_shows = require("./Top torrent/Top Shows");
const top_anime = require("./Top torrent/Top anime");
const top_games = require("./Top torrent/Top  games");
const updateList = require("./Top torrent/z_Update List")


const pirate_search = require("./Search-sites/Pirate bay");
const nyaa_search = require("./Search-sites/Nyaa search");
const rarbg_search = require("./Search-sites/RARBG search");
const X1337_search = require("./Search-sites/1337x Search");

app.get("/refresh",(req,res)=>{

    updateList.fetch_top_animes()
    updateList.fetch_top_games()
    updateList.fetch_top_shows()
    updateList.fetch_top_movies()

    res.send("refreshed files")

})


app.use("/top-movies", top_movies);
app.use("/top-shows", top_shows);
app.use("/top-anime", top_anime);
app.use("/top-games", top_games);

app.use("/pirate-search", pirate_search);
app.use("/nyaa-search", nyaa_search);
app.use("/rarbg-search", rarbg_search);

app.use("/1337x-search", X1337_search);
app.use("/1337x/", X1337_search);



const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app
);



let port = process.env.PORT || 8080;

app.listen(8080,()=>{


  console.log("running on port 8080")
})


app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));

});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err + "build - deploy");
    }
  });




});
