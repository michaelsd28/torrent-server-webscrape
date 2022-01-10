import React, { useContext } from "react";
import { DataContext } from "../Data Context/Top_context";
import { Movies, Anime, Games, Shows } from "./index";
import "../../Styles/Nested-rows.css";
import Top_text from "../Top/Top text";
import Loading from "../Animation/Loading";
import GoTop from "./GoTop";

function AllColumns() {
  const { loading_top } = useContext(DataContext);

  if (loading_top) {
    return (
      <>
        <Top_text />
        <div id="all-columns" className="two  nested-rows-two">
          <Movies />
          <Shows />
          <Anime />
          <Games />
        </div>

  
          <div  >
          <GoTop />
  
        </div>
        {/* <div className="four">4</div> */}
      </>
    );
  } else {
    return <Loading />;
  }
}

export default AllColumns;
