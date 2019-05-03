import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';
import { WithStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoginForm from './login-form';

const styles = (theme: Theme) =>
    createStyles({
        main: {
            width: 'auto',
            display: 'block', // Fix IE 11 issue.
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
                width: 330,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        },
        paper: {
            marginTop: theme.spacing.unit * 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        loginHeader: {
            padding: `${theme.spacing.unit * 2}px 0`,
            width: '100%',
            borderBottom: '1px solid rgba(0,0,0,0.12)'
        },
        loginBody: {
            padding: `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
        },
        avatar: {
            margin: theme.spacing.unit,
            backgroundColor: theme.palette.secondary.main
        },
        register: {
            marginTop: '24px'
        }
    });

interface LoginProps extends WithStyles<typeof styles> {}

class Login extends React.Component<LoginProps> {
    public render(): JSX.Element {
        const classes = this.props.classes;

        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <div className={classes.loginHeader}>
                        <Typography component='h1' variant='h5' align='center'>
                            Login
                        </Typography>
                    </div>
                    <div className={classes.loginBody}>
                        <LoginForm />
                    </div>
                </Paper>
                <Typography className={classes.register} component='p'>
                    Don't have an account? <Link to='/register'>Register</Link>
                </Typography>
            </main>
        );
    }
}

export default withStyles(styles)(Login);
