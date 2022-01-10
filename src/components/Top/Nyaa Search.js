import React, { useContext } from "react";
import "../../Styles/Mobile.css"
import { DataContext } from "../Data Context/Top_context";
import { useHistory } from "react-router-dom";

const link = "http://localhost:3001/nyaa-search/"

function Nyaa_Search() {
  const history = useHistory();

  const pirateSearch = () => {
    let path = "pirate-search";
    history.push(path);
  };

  const { setSearch, input_value,setSearch_link,setLoading  } = useContext(DataContext);

  return (
    <div

    
    className="nyaa-wrapper"
      onClick={() => {
        setSearch(input_value)
        setSearch_link(link)
        setLoading(false)
      }}
    >
      <a onClick={pirateSearch}>
      <div id="Nyaa-search">
        <h3>Nyaa</h3>
        <img src="https://www.pikpng.com/pngl/b/354-3548787_purple-cat-scpurple-galaxy-cat-galaxycat-blue-galaxy.png"></img>
      </div>
      </a>
    </div>
  );
}

export default Nyaa_Search;
