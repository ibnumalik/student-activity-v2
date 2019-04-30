// import "@babel/polyfill"

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import HomeComponent from './Home';

import "../sass/app.scss";

ReactDOM.render(
  <HomeComponent/>,
  document.getElementById('root')
);
