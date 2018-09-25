import * as React from "react";
import AppRouter from "../routes/AppRouter";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import createStore from "@redux/store";

const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </CssBaseline>
      </div>
    );
  }
}
