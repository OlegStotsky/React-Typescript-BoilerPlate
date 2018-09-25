import * as React from "react";
import AppRouter from "../routes/AppRouter";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline>
          <AppRouter />
        </CssBaseline>
      </div>
    );
  }
}
