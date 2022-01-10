import React, {  useContext } from "react";
import Torrent_row from "./Torrent_row";
import { DataContext } from "../Data Context/Top_context";

function Anime() {


  const { data_anime } = useContext(DataContext);


    return (
      <div id="anime-row" className="anime-row">
      <img  src="https://i.ibb.co/s6BbrWh/f02c7081d2d7ea3b6f0171cd26cd6825.png" alt="img"></img>
      <Torrent_row
          tTitle={data_anime.anime}
          tSeed={data_anime.seeds}
          tMagnet={data_anime.magnet}
        />
        </div>
    )
}

export default Anime
