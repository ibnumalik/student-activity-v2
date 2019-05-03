import * as React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./auth/login/login";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <HashRouter>
        <Route path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </HashRouter>

    </React.Fragment>
  );
};

export default App;
