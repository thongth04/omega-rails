import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Series from "../Series/Series";
import SeriesDetail from "../SeriesDetail/SeriesDetail";
import _Footer from "../shared/_Footer";
import _Header from "../shared/_Header";

const App = () => {
  return (
    <div className="container">
      <_Header />

      <div className="main-content">
        <Switch>
          <Route exact path="/" component={Series} />
          <Route exact path="/series/:slug" component={SeriesDetail} />
        </Switch>
      </div>

      <_Footer />
    </div>
  );
};

export default App;
