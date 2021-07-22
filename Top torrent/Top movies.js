const express = require("express");
const cheerio = require("cheerio");
const router = express.Router();
const top_movies_url = "https://thepiratebay10.org/browse/201/1/7/0";
const cron = require("node-schedule");
const fs = require("fs");
const got = require("got");
const date = new Date();

//cron.scheduleJob("* * * * *", async () => {
//cron.scheduleJob(" 0 1 * * *", async () => {

cron.scheduleJob(" 0 1 * * *", async () => {
  const html = await got(top_movies_url);

  const $ = cheerio.load(html.body);

  let top_Titles = [];
  $("#searchResult > tbody > tr:nth-child(n) > td:nth-child(2) > div > a").each(
    (index, value) => {
      let link = $(value).text();

      top_Titles.push(link);
    }
  );

  let top_Magnet = [];
  $("tbody  a").each((index, value) => {
    let link_M = $(value).attr("href");
    if (link_M.includes("magnet")) {
      top_Magnet.push(link_M);
    }
  });

  let top_Seeds = [];
  $(`#searchResult > tbody > tr:nth-child(n) > td:nth-child(3)`).each(
    (index, value) => {
      let link_S = $(value).text();
      top_Seeds.push(link_S);
    }
  );

  console.log(
    top_Seeds.length,
    "<<---seeds",
    top_Magnet.length,
    "top_Magnet",
    top_Titles.length
  );

  const top_Movies_JSON = {
    movies: top_Titles,
    magnet: top_Magnet,
    seeds: top_Seeds,
  };

  const topMOVIESfile = JSON.stringify(top_Movies_JSON);

  fs.writeFile(__dirname + "/z_Top Movies.json", topMOVIESfile, (err) => {
    if (err) throw err;
  });
});

router.get("/", async (req, res) => {
  res.json(top_Movies_JSON);
  console.log(`top movies file updated on ${date}`);

  res.sendFile(__dirname + "/z_Top Movies.json");

  console.log("sent file /z_Top Movies.json", Date());
});

module.exports = router;
