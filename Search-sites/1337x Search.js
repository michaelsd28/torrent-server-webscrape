const express = require("express");
const cheerio = require("cheerio");
const router = express.Router();
const pirate_search = "https://www.1377x.to/search/";
const got = require("got");
const changeLink = require("./search link request");
const X1337_pre_link = "https://www.1377x.to";

const ip = "https://ec2-52-91-133-3.compute-1.amazonaws.com/";
const redirect_link = ip + "1337x/redirect/";



// 1337x.to (default)
// 1337x.tw
// 1377x.to
// 1337xx.to
// 1337x.st
// x1337x.ws
// x1337x.eu
// x1337x.se
// 1337x.is
// 1337x.gd

router.get("/:id", async (req, res) => {
  try {
    const myParams = req.params.id;
    const search_pirate = changeLink.linkRequestNyaa(
      pirate_search + myParams + "/1/"
    );

    console.log(search_pirate, "search_1337x ******");

    const html = await got(search_pirate);
    const $ = cheerio.load(html.body);
    console.log(html.statusCode, "html.statusCode ***search_1337x ****");

    /* search title */

    let top_Titles = [];
    $(
      "body > main > div > div > div > div.box-info-detail.inner-table > div.table-list-wrap > table > tbody > tr:nth-child(n) > td.coll-1.name > a:nth-child(2)"
    ).each((index, value) => {
      let link = $(value).text();

      top_Titles.push(link);
    });

    let top_Magnet = [];
    $(
      "body > main > div > div > div > div.box-info-detail.inner-table > div.table-list-wrap > table > tbody > tr:nth-child(n) > td.coll-1.name > a:nth-child(2)"
    ).each((index, value) => {
      let link_M = $(value).attr("href");

      let fake_link = changeLink.slashFAKE(X1337_pre_link + link_M);

      redirect_link;

      top_Magnet.push(redirect_link + fake_link);
    });

    let top_Seeds = [];
    let top_type = [];
    let top_sub_type = [];
    $(
      `body > main > div > div > div > div.box-info-detail.inner-table > div.table-list-wrap > table > tbody > tr:nth-child(n) > td.coll-2.seeds`
    ).each((index, value) => {
      let link = $(value).text();
      top_Seeds.push(link);
      top_type.push("1337x");
      top_sub_type.push("torrent");
    });

    let storage = [];

    $(
      `body > main > div > div > div > div.box-info-detail.inner-table > div.table-list-wrap > table > tbody > tr:nth-child(n) > td.coll-4.size.mob-uploader`
    ).each((index, value) => {
      let link_S = $(value).text();

      let indexof = link_S.indexOf("B") + 1;

      if (
        link_S.includes("KB") ||
        link_S.includes("MB") ||
        link_S.includes("GB")
      ) {
        storage.push(link_S.substring(0, indexof));
      }
    });

    const top_Movies_JSON = {
      movies: top_Titles,
      magnet: top_Magnet,
      seeds: top_Seeds,
      type: top_type,
      subtype: top_sub_type,
      size: storage,
    };

    res.json(top_Movies_JSON);
  } catch (error) {
    console.log("error*** top_Movies_JSON");
  }
});

router.get("/redirect/:torrentRedirect", async (req, res) => {
  try {
    let params = req.params.torrentRedirect;
    let req_link = changeLink.slashREDIRECT(params, "^", "/");

    console.log(req_link, "req_link");

    const html = await got(req_link);
    const $ = cheerio.load(html.body);

    let magnet = $(".box-info li a").attr("href");

    res.status(301).redirect(magnet);
  } catch (error) {}
});

module.exports = router;
