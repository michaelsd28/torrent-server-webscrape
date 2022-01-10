import React, { createContext, useState, useEffect } from "react";
import { obj, suggestion, filter_suggestion,localData } from "../Animation/LocalStorage";
const top_movies_URL = "http://localhost:3001/top-movies";
const top_shows_URL = "http://localhost:3001/top-shows";
const top_games_URL = "http://localhost:3001/top-games";
const top_anime_URL = "http://localhost:3001/top-anime";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [didMount, setDidMount] = useState(false);
  const [data_movies, setdata_movies] = useState({});
  const [data_shows, setdata_shows] = useState({});
  const [data_anime, setdata_anime] = useState({});
  const [data_games, setdata_games] = useState({});
  const [searchData, setSearchData] = useState({});
  const [search, setSearch] = useState("");
  const [input_value, setInput_value] = useState("");
  const [search_link, setSearch_link] = useState("");
  const [loading_top, setLoading_top] = useState(false);
  const [loading, setLoading] = useState(true ); 
  const [filter,setFilter] = useState({})







  useEffect(() => {
    console.log(filter_suggestion, "filter_suggestion - context");
    

    async function fetchTop_Torrent() {
      setDidMount(true);

      const response = await fetch(top_movies_URL);
      const response_shows = await fetch(top_shows_URL);
      const response_anime = await fetch(top_anime_URL);
      const response_games = await fetch(top_games_URL);

      const json_TOP_movies = await response.json();
      const json_TOP_shows = await response_shows.json();
      const json_TOP_anime = await response_anime.json();
      const json_TOP_games = await response_games.json();

      setdata_movies(json_TOP_movies);
      setdata_shows(json_TOP_shows);
      setdata_anime(json_TOP_anime);
      setdata_games(json_TOP_games);
      setLoading_top(true);
    }

    fetchTop_Torrent();

    // window.scrollTo(0, 0);

    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <DataContext.Provider
      value={{
        setdata_movies,
        data_movies,

        data_shows,
        setdata_shows,

        data_anime,
        setdata_anime,

        data_games,
        setdata_games,

        search,
        setSearch,

        searchData,
        setSearchData,

        input_value,
        setInput_value,

        search_link,
        setSearch_link,

        loading_top,
        setLoading_top,

        loading,
        setLoading,

        filter,setFilter
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

