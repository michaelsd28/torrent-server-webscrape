/* eslint-disable react/jsx-pascal-case */
import React, {  useContext } from "react";
import Torrent_row from "./Torrent_row";
import { DataContext } from "../Data Context/Top_context";


function Games() {

    const { data_games } = useContext(DataContext);




    return (
      <div id="games-row" className="games-row">

        
      <img className="game-img" src="https://i.ibb.co/hgkWT3g/playmegames-reguler.png" alt="game logo"></img>

      {/* <img  className="controller-img" src="https://i.ibb.co/xLygGKB/toppng-com-controler-ps4-controller-pixel-art-1009x577.png"></img> */}
      <Torrent_row
          tTitle={data_games.games}
          tSeed={data_games.seeds}
          tMagnet={data_games.magnet}
        />
        </div>
    )
}

export default Games
