import React from "react";
import "./Styles/App.css";
import Top_header from "./components/Top/Top header";
import Top_text from "./components/Top/Top text";
import AllColumns from "./components/Top 4 columns/AllColumns"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DataProvider } from "./components/Data Context/Top_context";
import Pirate_bay_search from "./components/Torrent search/Pirate bay search";

function App() {
  return (

   
        <Router>
        
          <div id="content" className="all-columns">
          <DataProvider>
            <Top_header />
            <Switch>
              <Route
                path="/pirate-search"
                exact
                component={Pirate_bay_search}
              />

                <Route
                path="/"
                exact
                component={AllColumns}
              />

        

      
            </Switch>


            </DataProvider>
          </div>
      
        </Router>
  

  );
}

export default App;
