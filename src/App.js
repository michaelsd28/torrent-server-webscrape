import React from "react";
import "./Styles/App.css";
import Top_header from "./components/Top/Top header";

import AllColumns from "./components/Top 4 columns/AllColumns";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DataProvider } from "./components/Data Context/Top_context";
import Pirate_bay_search from "./components/Torrent search/Pirate bay search";

import Footer from "./components/Footer";
import TorrentSearch_TableM from "./components/Mobile/TorrentSearch_TableM";
import { number } from "prop-types";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth.toString());
    });
  }, []);

  return (
    <Router>
      <div id="content" className="all-columns">
        <DataProvider>
          <Top_header />
          <Switch>
            <Route
              path="/pirate-search"
              exact
              component={
                parseInt(width) > 500 ? Pirate_bay_search : TorrentSearch_TableM
              }
            />

            <Route path="/" exact component={AllColumns} />
          </Switch>
        </DataProvider>
      </div>
    </Router>
  );
}

export default App;
