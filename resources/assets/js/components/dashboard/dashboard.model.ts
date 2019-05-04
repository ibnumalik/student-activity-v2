import { WithStyles } from '@material-ui/core';
import styles from './dashboard-style';

export type DashboardProps = WithStyles<typeof styles> & {};

export const module = [
    {
        title: 'parking',
        description: 'Purchase monthly parking ticket here.',
        thumbnail: '',
        ctaText: 'buy parking passes',
        ctaLink: ''
    },
    {
        title: 'seminar',
        description: 'Check seminar scheduling.',
        thumbnail: '',
        ctaText: 'view schedule',
        ctaLink: ''
    },
    {
        title: 'transcript',
        description: 'Apply for physical transcript.',
        thumbnail: '',
        ctaText: 'request transcript',
        ctaLink: ''
    }
];
