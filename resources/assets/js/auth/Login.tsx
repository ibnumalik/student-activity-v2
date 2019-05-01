import * as React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';
import { WithStyles } from '@material-ui/core';
import axios from 'axios';
import env from '../env';

const styles = (theme: Theme) =>
    createStyles({
        main: {
            width: 'auto',
            display: 'block', // Fix IE 11 issue.
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
                width: 300,
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
        form: {
            width: '100%' // Fix IE 11 issue.
        },
        submit: {
            marginTop: theme.spacing.unit * 3
        }
    });

interface LoginProps extends WithStyles<typeof styles> {}

class Login extends React.Component<LoginProps> {
    public state = {
        formData: {
            email: '',
            password: ''
        }
    };
    private loginUrl = env.baseApi + '/login';

    private handleChange = (event: any) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    };

    private handleLogin = (event: any) => {
        event.preventDefault();

        const data = this.state.formData;

        axios.post(this.loginUrl, data).then(response => console.log(response));
    };

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
                        <form className={classes.form}>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='email'>
                                    Email Address
                                </InputLabel>
                                <Input
                                    onChange={this.handleChange}
                                    id='email'
                                    name='email'
                                    autoComplete='email'
                                    autoFocus
                                />
                            </FormControl>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='password'>
                                    Password
                                </InputLabel>
                                <Input
                                    onChange={this.handleChange}
                                    name='password'
                                    type='password'
                                    id='password'
                                    autoComplete='current-password'
                                />
                            </FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value='remember'
                                        color='primary'
                                    />
                                }
                                label='Remember me'
                            />
                            <Button
                                onClick={this.handleLogin}
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='primary'
                                className={classes.submit}
                            >
                                Log in
                            </Button>
                        </form>
                    </div>
                </Paper>
            </main>
        );
    }
}

const login = () => {
    console.log('test');
};

export default withStyles(styles)(Login);
