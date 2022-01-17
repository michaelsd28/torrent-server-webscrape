import React from "react";
import "../../Styles/Mobile.css"
import Footer from "../Footer";
import GoTop from "../top 4 columns/GoTop";
import PageControl from "../Top/PageControl";

function TorrentSearch_TableM() {
  return (
    <>
   
    <div className="container tableMobile-container">
      <table 
      
      
      className="table table-hover table-dark table-mobile table-borderless table-striped"  >
        <thead
     
        
        >
          <tr>
           
            <th >Name</th>
            <th >Link</th>
            <th >Seed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
   
            <td>[Kawaiika-Raws] (2010) B Gata H Kei [BDRip 1920x1080 HEVC FLAC]</td>
            <td><img
            style={{
              height:"20px"
            }}
            src="images/mobile/magnet.png"/></td>
            <td>28</td>
          </tr>
          <tr>
   
   <td>[Kawaiika-Raws] (2010) B Gata H Kei [BDRip 1920x1080 HEVC FLAC]</td>
   <td><img
   style={{
     height:"20px"
   }}
   src="images/mobile/magnet.png"/></td>
   <td>28</td>
 </tr>

 <tr>
   
   <td>[Kawaiika-Raws] (2010) B Gata H Kei [BDRip 1920x1080 HEVC FLAC]</td>
   <td><img
   style={{
     height:"20px"
   }}
   src="images/mobile/magnet.png"/></td>
   <td>28</td>
 </tr>
 <tr>
   
   <td>[Kawaiika-Raws] (2010) B Gata H Kei [BDRip 1920x1080 HEVC FLAC]</td>
   <td><img
   style={{
     height:"20px"
   }}
   src="images/mobile/magnet.png"/></td>
   <td>28</td>
 </tr>
 <tr>
   
   <td>[Kawaiika-Raws] (2010) B Gata H Kei [BDRip 1920x1080 HEVC FLAC]</td>
   <td><img
   style={{
     height:"20px"
   }}
   src="images/mobile/magnet.png"/></td>
   <td>28</td>
 </tr>
      
        </tbody>
      </table>

      <div>
        <PageControl/>
      </div>
      <GoTop/>
    </div>
    </>
  );
}

export default TorrentSearch_TableM;
