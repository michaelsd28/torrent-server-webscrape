import React, { useContext } from "react";
import { DataContext } from "../Data Context/Top_context";
import { useHistory } from "react-router-dom";


const link = "http://localhost:3001/pirate-search/";

function Pirate_bay_search() {
  const history = useHistory();

  const pirateSearch = () => {
    let path = "pirate-search";
    history.push(path);
  };

  const { setSearch, input_value, setSearch_link, setLoading } =
    useContext(DataContext);

  return (
    <a className="pirate-wrapper" onClick={pirateSearch}>
      <div
        onClick={() => {
          setSearch(input_value);
          setSearch_link(link);
          setLoading(false);
        }}
      >
        <div>
          <div id="pirate-bay">
            <h3>
              pirate bay
              <i className="fas fa-skull-crossbones"></i>
            </h3>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Pirate_bay_search;
