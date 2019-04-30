// import "@babel/polyfill"

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from './hello';

import "../sass/app.scss";

ReactDOM.render(
  <HelloComponent/>,
  document.getElementById('root')
);
