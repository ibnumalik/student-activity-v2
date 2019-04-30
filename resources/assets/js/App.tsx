import * as React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeComponent from "./components/Home";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <Router>
        <Route path="/" component={HomeComponent}></Route>
      </Router>

    </React.Fragment>
  );
};

export default App;
