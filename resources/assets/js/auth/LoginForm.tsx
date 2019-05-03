import * as React from 'react';
import { WithStyles, createStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import env from '../env';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) =>
    createStyles({
        form: {
            width: '100%' // Fix IE 11 issue.
        },
        submit: {
            marginTop: theme.spacing.unit * 3
        }
    });

interface LoginFormProps extends WithStyles<typeof styles> {}

class LoginForm extends React.Component<LoginFormProps> {
    public state = {
        formData: {
            email: '',
            password: ''
        },
        formError: ''
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

        axios
            .post(this.loginUrl, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                const {
                    response: { status },
                    response
                } = error;
                console.log(status, response);
                if (status === 422) {
                    this.setState({
                        formError: 'Email/password is required'
                    });
                }
            });
    };

    public render() {
        const classes = this.props.classes;

        return (
            <form className={classes.form}>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='email'>Email Address</InputLabel>
                    <Input
                        onChange={this.handleChange}
                        id='email'
                        name='email'
                        autoComplete='email'
                        autoFocus
                    />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input
                        onChange={this.handleChange}
                        name='password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
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
        );
    }
}

export default withStyles(styles)(LoginForm);
