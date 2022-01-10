import React, { useContext } from "react";
import { DataContext } from "../Data Context/Top_context";
import {  useHistory } from "react-router-dom";

const link = "http://localhost:3001/1337x-search/"

function X1337_SEARCH() {
  const history = useHistory();

  const pirateSearch = () => {
    let path = "pirate-search";
    history.push(path);
  };

  const { setSearch, input_value,setSearch_link,setLoading  } = useContext(DataContext);

  return (
    <div className="X1337-search"
      onClick={() => {
        setSearch(input_value)
        setSearch_link(link)
        setLoading(false)
      }}
    >
      <a onClick={pirateSearch}>
      <div id="X1337-search">
   
        <img src="https://i.ibb.co/5LX40Vt/1337-X-logo.png"></img>
      </div>
      </a>
    </div>
  );
}

export default X1337_SEARCH;
