import Paper from '@material-ui/core/Paper';
import React from 'react';
import RegisterForm from './register-form';
import styles from './register-style';
import Topbar from '../../components/topbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { RegisterProps } from './register.model';

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
