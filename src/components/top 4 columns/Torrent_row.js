import React, { useState } from "react";



function Torrent_row({ tTitle, tMagnet, tSeed }) {






  return (
    <div className="top-torrent-row-format">
      <table className="rwd-table">
        <thead>
          <tr>
            <th>Top movie</th>
            <th>Link</th>
            {/* <th>Seed</th> */}
          </tr>
        </thead>
        {tTitle && (
          <tbody>
            {tTitle.map((item, index) => {

              if(index<26){
              return (

                <tr key={index} className="custom-counter">
                  <td>
                    <li> <small className="list-top-torrent">{index+1}</small>  {item.substring(0,50)} </li>
                  </td>
                  <td>
                    <a href={tMagnet[index]}>
                    <i   className="fas fa-magnet"   ></i>
                    </a>
                  </td>
                  {/* <td>{tSeed[index]}</td> */}
                </tr>
              );
            }
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Torrent_row;
