import FormValidator from '../../forms/validator';

const validator = new FormValidator([
    {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Email is required'
    },
    {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Please provide email'
    },
    {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password is required'
    }
]);

export const loginFormValidator = validator.valid();

export const validateLoginForm = (form: any) => validator.validate(form);
