import { WithStyles } from '@material-ui/core';
import registerStyle from './register-style';
import registerFormStyle from './register-form-style';

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

export type RegisterFormProps = WithStyles<typeof registerFormStyle> & {};

export type RegisterProps = WithStyles<typeof registerStyle> & {};
