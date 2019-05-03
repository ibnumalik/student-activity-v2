import FormValidator from '../../forms/validator';

const validator = new FormValidator([
    {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Name is required'
    },
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

export const registerFormValidator = validator.valid();

export const validateRegisterForm = (form: any) => validator.validate(form);
