import { createStyles } from '@material-ui/core';

export default createStyles({
    main: {
        width: 960,
        margin: '48px auto'
    },
    actionArea: {
        backgroundColor: '#f0f0f0',
        height: '100%'
    },
    card: {
        maxWidth: 345,
        height: 350,
        display: 'flex',
        flexDirection: 'column'
    },
    media: {
        height: 140
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 500
    },
    action: {
        marginTop: 'auto'
    }
});
