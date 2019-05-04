import * as React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import Home from "./components/home";
import Login from "./auth/login/login";
import Register from "./auth/register/register";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <HashRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </HashRouter>

    </React.Fragment>
  );
};

export default App;
