import { WithStyles } from "@material-ui/core";
import { styles } from "./login-form";

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
