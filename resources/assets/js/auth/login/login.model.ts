import { WithStyles } from '@material-ui/core';
import loginStyle from './login-style';
import loginFormStyle from './login-form-style';

type InputFieldValidation = {
    isInvalid: boolean;
    message: String;
};
export type LoginFormValidation = {
    isValid: boolean;
    email?: InputFieldValidation;
    password?: InputFieldValidation;
};
type LoginFormResponse = { status: string; message: string };

export type LoginFormState = {
    formData: { email: string; password: string };
    validation: LoginFormValidation;
    formResponse: LoginFormResponse;
};

export type LoginFormProps = WithStyles<typeof loginFormStyle> & {};

export type LoginProps = WithStyles<typeof loginStyle> & {};
