import * as validator from 'validator';
/*
 | ----------------------------------------------------------------------------
 | Validation
 | ----------------------------------------------------------------------------
 |
 | My design goals are as follows:
 |
 | 1. Portability/Reusability. I want to be able to use the same validation code
 | several places in my project, and in future projects.
 | 2. Flexibility. It needs to be able to handle most common validation
 | scenarios, like checking if a field is empty, that it’s numeric, etc.
 | 3. Multiple validations per field. This is a very common requirement.
 | 4. Validations based on more than one field. This is a trickier one, but is
 | surprisingly familiar: Does the first password confirmation field match the
 | password field? Did the user fill out either the phone or the email field?
 | 5. Easily integrated. Please don’t make me redesign my form.
 |
 | Source: https://medium.com/code-monkey/client-side-form-validation-in-react-40e367de47ba
 */

export default class FormValidator {
    public validations: Array<any>;

    constructor(validations: Array<any>) {
        this.validations = validations;
    }

    validate(state: any) {
        let validation = this.valid();

        this.validations.forEach(rule => {
            const {
                field,
                args = [],
                method,
                validWhen = true,
                message
            } = rule;
            if (!validation[field].isInvalid) {
                const fieldValue = state[field].toString();
                const validationMethod =
                    typeof method === 'string' ? validator[method] : method;

                if (
                    validationMethod(fieldValue, ...args, state) !== validWhen
                ) {
                    validation[field] = {
                        isInvalid: true,
                        message: message
                    };
                    validation.isValid = false;
                }
            }
        });
        return validation;
    }

    valid() {
        const validation = {};

        this.validations.map(
            rule => (validation[rule.field] = { isInvalid: false, message: '' })
        );

        return { isValid: true, ...validation };
    }
}
