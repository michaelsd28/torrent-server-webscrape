const cheerio = require("cheerio");
const top_games_url = "https://1337x.unblockninja.com/top-100-games";
const top_anime_url = "https://nyaa.si/?s=seeders&o=desc";
const top_movies_url = "https://thepiratebay10.org/browse/201/1/7/0";
const top_shows_url = "https://thepiratebay10.org/top/205";
const fs = require("fs");
const got = require("got");
const date = new Date();
const changeLink = require("../Search-sites/search link request");
const ip =  "https://localhost/"
const localhostRED = ip+"1337x/redirect/"



/* top games */

 async function fetch_top_games() {
  const html = await got(top_games_url);

  const $ = cheerio.load(html.body);

  let top_Titles = [];
  $(
    "body > main > div > div > div.featured-list > div > table > tbody > tr:nth-child(n) > td.coll-1.name > a:nth-child(2)"
  ).each((index, value) => {
    let link = $(value).text();
    top_Titles.push(link);
  });

  let top_seeds = [];
  $(
    "body > main > div > div > div.featured-list > div > table > tbody > tr:nth-child(n) > td.coll-2.seeds"
  ).each((index, value) => {
    let link = $(value).text();

    top_seeds.push(link);
  });

  let top_link = [];
  $(
    "body > main > div > div > div.featured-list > div > table > tbody > tr:nth-child(n) > td.coll-1.name > a:nth-child(2)"
  ).each((index, value) => {
    let link =
      localhostRED +
      changeLink.slashFAKE(
        "https://1337x.unblockninja.com" + `${$(value).attr("href")}`
      );

    top_link.push(link);
  });

  const JsonResponse = {
    games: top_Titles,
    magnet: top_link,
    seeds: top_seeds,
  };

  fs.writeFileSync(
    __dirname + "/z_Top Games.json",
    JSON.stringify(JsonResponse),
    (err) => {
      if (err) throw err;
    }
  );
  console.log(`top games* file updated on ${date}`);
}

/* top anime */

 async function fetch_top_animes (){

    const html = await got(top_anime_url);
    const $ = cheerio.load(html.body);
  
    /* title */
    let top_Titles = [];
    $(
      "body > div > div.table-responsive > table > tbody > tr:nth-child(n) > td:nth-child(2) > a:nth-child(n)"
    ).each((index, value) => {
      let link = $(value).attr("title");
  
      if (!link.includes("comment")) {
        top_Titles.push(link);
      }
    });
  
  
  
    /* top_magnet */
    let top_magnet = [];
    $("tbody a").each((index, value) => {
      let link_m = $(value).attr("href");
  
      if (link_m.includes("magnet")) {
        top_magnet.push(link_m);
      }
    });
  
    let top_seeds = [];
    $( "body > div > div.table-responsive > table > tbody > tr:nth-child(n) > td:nth-child(6)").each((index, value) => {
      let link_s = $(value).text();
      top_seeds.push(link_s);
    });
  
    console.log(
      top_Titles.length,
      "top_Titles",
      top_magnet.length,
      "top_magnet",
      top_seeds.length,
      "top_seeds"
    );
  
    let JsonResponse = {
      anime: top_Titles,
      magnet: top_magnet,
      seeds: top_seeds,
    };
  
    const topAnimeFile = JSON.stringify(JsonResponse);
  
    fs.writeFileSync(__dirname + "/z_Top anime.json", topAnimeFile, (err) => {
      if (err) throw err;
    });
  
  
  
    console.log(`top anime file updated on ${date}`)
    
}

/* top movies  */


 async function fetch_top_movies (){

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
    console.log(`top movies file updated on ${date}`)

}

 async function fetch_top_shows(){




    const html = await got(top_shows_url);
    const $ = cheerio.load(html.body);
  
  
  
  
        let top_Titles = [];
        $("tbody .detName a").each((index, value) => {
          let link = $(value).text();
  
          if(top_Titles.length<26){
  
              top_Titles.push(link);
          }
    
        });
  
        let top_Magnet = [];
        $("tbody  a").each((index, value) => {
          let link_M = $(value).attr("href");
          if (link_M.includes("magnet")) {
  
              if(top_Magnet.length<26){
  
                  top_Magnet.push(link_M);
              }
  
          }
        });
  
        let top_Seeds = [];
        $(`#searchResult > tbody > tr:nth-child(n) > td:nth-child(3)`).each(
          (index, value) => {
            let link_S = $(value).text();
            if(top_Seeds.length<26){
  
              top_Seeds.push(link_S);
          }
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
          shows: top_Titles,
          magnet: top_Magnet,
          seeds: top_Seeds,
        };
  
        const topMOVIESfile = JSON.stringify(top_Movies_JSON);
  
        fs.writeFileSync(__dirname+"/z_Top Shows.json", topMOVIESfile, (err) => {
          if (err) throw err;
        });
        console.log(`top shows* file updated on ${date}`)
    
}


module.exports = {
    fetch_top_animes,
    fetch_top_games,
    fetch_top_movies,
    fetch_top_shows
  };
  