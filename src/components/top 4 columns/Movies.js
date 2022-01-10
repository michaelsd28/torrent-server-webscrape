import React, { useContext } from "react";
import Torrent_row from "./Torrent_row";
import "../../Styles/Nested-rows.css";
import { DataContext } from "../Data Context/Top_context";

function Movies() {


  const { data_movies } = useContext(DataContext);

  return (
    <div id="movies-row" className="movies-row  list-class">
      <img src="https://i.ibb.co/Pm94ksv/Daco-4363403.png"></img>

      {data_movies.movies && (
        <Torrent_row
          tTitle={data_movies.movies}
          tSeed={data_movies.seeds}
          tMagnet={data_movies.magnet}
        />
      )}
    </div>
  );
}

export default Movies;
