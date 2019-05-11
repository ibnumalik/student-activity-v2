import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) =>
    createStyles({
        form: {
            width: '100%' // Fix IE 11 issue.
        },
        submit: {
            marginTop: theme.spacing.unit * 3
        },
        textCenter: {
            textAlign: 'center'
        }
    });
