import axios from 'axios';
import Button from '@material-ui/core/Button';
import env from '../../env';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom';
import {
    RegisterFormProps,
    RegisterFormState,
    RegisterFormValidation
} from './register.model';
import {
    registerFormValidator,
    validateRegisterForm
} from './register-validation';
import styles from './register-form-style';

class RegisterForm extends React.Component<
    RegisterFormProps,
    RegisterFormState
> {
    state: RegisterFormState = {
        formData: {
            name: '',
            email: '',
            password: ''
        },
        validation: registerFormValidator,
        formResponse: {
            status: '',
            message: ''
        }
    };
    _registerUrl = env.baseApi + '/register';

    _handleChange = (event: any) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    };

    _handleRegister = (event: any) => {
        event.preventDefault();

        const { formData } = this.state;
        const validation: RegisterFormValidation = validateRegisterForm(
            formData
        );

        this.setState({ validation });

        if (validation.isValid) {
            axios
                .post(this._registerUrl, formData)
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
                <FormHelperText>
                    {this.state.formResponse.message}
                </FormHelperText>
                <FormControl
                    margin='normal'
                    required
                    fullWidth
                    error={this.state.validation.name.isInvalid}
                >
                    <InputLabel htmlFor='email'>Name</InputLabel>
                    <Input
                        onChange={this._handleChange}
                        id='name'
                        name='name'
                        autoComplete='name'
                        autoFocus
                    />
                    <FormHelperText>
                        {this.state.validation.name.message}
                    </FormHelperText>
                </FormControl>
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
                <Button
                    onClick={this._handleRegister}
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                >
                    Register
                </Button>
            </form>
        );
    }
}

export default withStyles(styles)(RegisterForm);
