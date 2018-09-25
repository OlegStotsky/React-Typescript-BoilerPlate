import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";

export default class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" exact component={HomePage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
