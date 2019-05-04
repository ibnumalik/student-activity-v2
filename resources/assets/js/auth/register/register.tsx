import Paper from '@material-ui/core/Paper';
import React from 'react';
import RegisterForm from './register-form';
import Topbar from '../../components/topbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { createStyles, Theme } from '@material-ui/core';
import { WithStyles } from '@material-ui/core';

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
        formHeader: {
            padding: `${theme.spacing.unit * 2}px 0`,
            width: '100%',
            borderBottom: '1px solid rgba(0,0,0,0.12)'
        },
        formBody: {
            padding: `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
        },
        avatar: {
            margin: theme.spacing.unit,
            backgroundColor: theme.palette.secondary.main
        }
    });

interface RegisterProps extends WithStyles<typeof styles> {}

class Register extends React.Component<RegisterProps> {
    public render(): JSX.Element {
        const classes = this.props.classes;

        return (
            <React.Fragment>
                <Topbar />
                <main className={classes.main}>
                    <Paper className={classes.paper}>
                        <div className={classes.formHeader}>
                            <Typography
                                component='h1'
                                variant='h5'
                                align='center'
                            >
                                Register
                            </Typography>
                        </div>
                        <div className={classes.formBody}>
                            <RegisterForm />
                        </div>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Register);
