import { styles } from './register-form';
import { WithStyles } from '@material-ui/core';

type InputFieldValidation = {
    isInvalid: boolean;
    message: String;
};
export type RegisterFormValidation = {
    isValid: boolean;
    name?: InputFieldValidation;
    email?: InputFieldValidation;
    password?: InputFieldValidation;
};
type RegisterFormResponse = { status: string; message: string };

export type RegisterFormState = {
    formData: { name: string; email: string; password: string };
    validation: RegisterFormValidation;
    formResponse: RegisterFormResponse;
};

export type RegisterFormProps = WithStyles<typeof styles> & {};
