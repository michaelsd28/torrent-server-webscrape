import React, { useContext } from "react";
import "../../Styles/Nested-rows.css";
import { DataContext } from "../Data Context/Top_context";
import { devideString } from "./Methods/Nyaa Type";

function Torrent_search_table({ value }) {
  const { search, setSearch } = useContext(DataContext);

  const new_nyaa_type = devideString(value)


  return (
    <div className="search-table-wrapper">
      <div style={{paddingTop:"-250px"}} className="search-table-container">
        <table className="search-table">
          <tr  >
         <th> <p> <img src="https://image.flaticon.com/icons/png/512/3596/3596683.png" alt="td-torrent"></img> </p>  <text>Type</text> </th>
           <th><p> <img src="https://image.flaticon.com/icons/png/512/2292/2292229.png" alt="td-torrent"></img>  </p> <text>Torrent </text> </th>
           <th><p> <img src="https://image.flaticon.com/icons/png/512/1017/1017466.png" alt="td-torrent"></img> </p> <text> Link </text> </th>
             <th> <p> <img src="https://image.flaticon.com/icons/png/512/3893/3893000.png" alt="td-torrent"></img></p> <text>health </text> </th>
          </tr>

          {value.movies.map((item, index) => {
            return (
              <tr>
                <td className="table-type" data-th="Movie Title">
                  {new_nyaa_type.type[index]} <br></br>{" "}
                  {value.subtype ? value.subtype[index] : new_nyaa_type.subtype[index]}{" "}
                </td>
                <td  className="title-td" key={index} data-th="Movie Title">
                  {item.substring(0, 80)} <br></br>{" "}
                  <small className="small-size">{value.size[index]}</small>{" "}
                </td>
                <td key={index + 100} className="magnet-search-table">
                  {" "}
                  <a key={index + 200} href={value.magnet[index]}>
                    {" "}
                    <i class="fas fa-magnet  magnet-search-table"></i>{" "}
                  </a>{" "}
                </td>

                <td key={index + 300} className="table-seeds">
                  {value.seeds[index]}{" "}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Torrent_search_table;
