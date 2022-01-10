import React,{useContext} from "react";
import Search_bar from "./Search bar";
import Pirate_bay_search from "./Pirate Search";
import Nyaa_Search from "./Nyaa Search";
import RARBG_Search from "./RARBG Search.js";
import X1337_SEARCH from "./1337X Search";
import { DataContext } from "../Data Context/Top_context";

import { Link, useHistory } from "react-router-dom";

function Top_header() {

  const {setLoading} = useContext(DataContext);

  let dataIF = JSON.parse( localStorage.getItem("data"))
  dataIF.magnet[1]  &&  (window.onload = ()=> setTimeout(()=>{ console.log("1sec"); setLoading(true)},500))

  
  const history = useHistory();

  const goHome = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <div  id="top-header" className="one">
      <div className="go-back-img-wrapper">
      <a href="/">

      <img    className="go-back-img " src="https://www.pikpng.com/pngl/b/45-456788_pirate-png-high-quality-image-scribblenauts-pirate-clipart.png" alt="Pirate Png"></img>



      </a>
      </div>
      <Search_bar />

      <Pirate_bay_search />
      <Nyaa_Search />

      <X1337_SEARCH/>
    </div>
  );
}

export default Top_header;
