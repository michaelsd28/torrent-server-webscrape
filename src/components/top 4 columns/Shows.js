import React,{useContext} from "react";
import Torrent_row from "./Torrent_row";
import { DataContext } from "../Data Context/Top_context";

function Shows() {



  const {
    data_shows
    } = useContext(DataContext);
  





  return (
    <div id="shows-row" className="shows-row list-class" >
      {/* <img src="https://i.ibb.co/6vB0wcT/Png-Item-1084361.png"></img>{" "} */}
      <img src="https://i.ibb.co/9yWjkR7/larry-Yes-Upcoming-Shows.png"></img>

      <Torrent_row  
      tTitle={data_shows.shows}  
      tMagnet={data_shows.magnet} 
      tSeed={data_shows.seeds}/>
    </div>
  );
}

export default Shows;
