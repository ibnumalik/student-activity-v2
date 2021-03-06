import axios from 'axios';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import env from '../../env';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    LoginFormProps,
    LoginFormState,
    LoginFormValidation
} from './login.model';
import { loginFormValidator, validateLoginForm } from './login-form-validation';
import { Redirect } from 'react-router-dom';
import styles from './login-form-style';

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
    state: LoginFormState = {
        formData: {
            email: '',
            password: ''
        },
        validation: loginFormValidator,
        formResponse: {
            status: '',
            message: ''
        }
    };
    _loginUrl = env.baseApi + '/login';

    _handleChange = (event: any) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    };

    _handleLogin = (event: any) => {
        event.preventDefault();

        const { formData } = this.state;
        const validation: LoginFormValidation = validateLoginForm(formData);

        this.setState({ validation });

        if (validation.isValid) {
            axios
                .post(this._loginUrl, formData)
                .then(response => {
                    const { data: formResponse } = response;
                    this.setState({ formResponse });
                })
                .catch(error => {
                    const {
                        response: { status },
                        response
                    } = error;
                    if (status === 422) {
                        console.log(status, response);
                    }
                });
        }
    };

    render() {
        const classes = this.props.classes;

        if (this.state.formResponse.status === 'success') {
            return <Redirect to='/' />;
        }

        return (
            <form className={classes.form}>
                <FormHelperText
                    error={!!this.state.formResponse.message}
                    className={classes.textCenter}
                >
                    {this.state.formResponse.message}
                </FormHelperText>
                <FormControl
                    margin='normal'
                    required
                    fullWidth
                    error={this.state.validation.email.isInvalid}
                >
                    <InputLabel htmlFor='email'>Email Address</InputLabel>
                    <Input
                        onChange={this._handleChange}
                        id='email'
                        name='email'
                        autoComplete='email'
                        autoFocus
                    />
                    <FormHelperText>
                        {this.state.validation.email.message}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    margin='normal'
                    required
                    fullWidth
                    error={this.state.validation.password.isInvalid}
                >
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input
                        onChange={this._handleChange}
                        name='password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <FormHelperText>
                        {this.state.validation.password.message}
                    </FormHelperText>
                </FormControl>
                <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
                />
                <Button
                    onClick={this._handleLogin}
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
