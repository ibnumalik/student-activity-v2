import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) =>
    createStyles({
        main: {
            width: 'auto',
            display: 'block', // Fix IE 11 issue.
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
                width: 330,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        },
        paper: {
            marginTop: theme.spacing.unit * 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        loginHeader: {
            padding: `${theme.spacing.unit * 2}px 0`,
            width: '100%',
            borderBottom: '1px solid rgba(0,0,0,0.12)'
        },
        loginBody: {
            padding: `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
        },
        register: {
            marginTop: '24px'
        }
    });
