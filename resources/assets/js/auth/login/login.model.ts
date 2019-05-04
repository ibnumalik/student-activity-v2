import { styles } from './login-form';
import { WithStyles } from '@material-ui/core';

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

export type LoginFormProps = WithStyles<typeof styles> & {};
