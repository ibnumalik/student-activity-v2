import LoginForm from './login-form';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Topbar from '../../components/topbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { loginStyles } from './login-style';
import { WithStyles } from '@material-ui/core';

interface LoginProps extends WithStyles<typeof loginStyles> {}

class Login extends React.Component<LoginProps> {
    public render() {
        const classes = this.props.classes;

        return (
            <React.Fragment>
                <Topbar />
                <main className={classes.main}>
                    <Paper className={classes.paper}>
                        <div className={classes.loginHeader}>
                            <Typography
                                component='h1'
                                variant='h5'
                                align='center'
                            >
                                Login
                            </Typography>
                        </div>
                        <div className={classes.loginBody}>
                            <LoginForm />
                        </div>
                    </Paper>
                    <Typography className={classes.register} component='p'>
                        Don't have an account?{' '}
                        <Link to='/register'>Register</Link>
                    </Typography>
                </main>
            </React.Fragment>
        );
    }
}

export default withStyles(loginStyles)(Login);
