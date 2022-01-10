import React, { createContext, useState, useEffect, useContext } from "react";
import { DataContext } from "../Data Context/Top_context";
import { localOBJ } from "../Animation/LocalStorage";
import Torrent_search_table from "../Top/Torrent search table";
import { filterDATA } from "./Filter data";
import "../../Styles/Table-grid.css";
import Loading from "../Animation/Loading";
import PageControl from "../Top/PageControl";
import GoTop from "../Top 4 columns/GoTop";
const link = "http://localhost:3001/pirate-search/";
const link1 = "http://localhost:3001/1337x-search/";
const link2 = "http://localhost:3001/nyaa-search/";



function Pirate_bay_search() {


  const { search, search_link, loading, setLoading } = useContext(DataContext);
  const [state, setstate] = useState(search);
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));
  const [didMount, setDidMount] = useState(false);
  const [filter, setFilter] = useState(
    JSON.parse(localStorage.getItem("data"))
  );

  useEffect(() => {
    setDidMount(true);

    async function fetchTop_Torrent() {
      const response = await fetch(`${search_link}${search}`);
      const json_Response = await response.json();

      setData(json_Response);

      setFilter(json_Response);
      localStorage.setItem("data", JSON.stringify(json_Response));
      setLoading(true);
    }

    fetchTop_Torrent();

    // window.scrollTo(0, 0);

    return () => setDidMount(false);
  }, [search, search_link, loading]);

  if (!loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div id="table-grid-parent" className="table-grid-parent two">
        <div style={{ display: "none" }} className="filter-area">
          {" "}
        </div>
        <div className="table-grid-2">
          <div className="filter-data  top-torrent"></div>
          <form>
            <input
              onKeyUp={(e) => {
                const newDATA = data.movies
                  ? data
                  : JSON.parse(localStorage.getItem("data"));

                setFilter(filterDATA(newDATA, e.target.value));
              }}
              type="search"
            ></input>
            <label style={{ color: "white" }}>
              {" "}
              <i tabindex="1" className="fas fa-sort-alpha-up"></i>
            </label>
          </form>
          {data.movies && <Torrent_search_table value={filter} />}{" "}
        </div>
        <div className="table-grid-3"><PageControl/> <div className="button-go-top">       <GoTop/> </div> </div>
 
      </div>
    );
  }
}

export default Pirate_bay_search;
