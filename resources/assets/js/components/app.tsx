import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './dashboard/dashboard';
import Home from './home';
import Login from '../auth/login/login';
import React from 'react';
import Register from '../auth/register/register';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />

            <HashRouter>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/dashboard' component={Dashboard} />
            </HashRouter>
        </React.Fragment>
    );
};

export default App;
