import PropTypes from 'prop-types';
import React from 'react';
import Topbar from '../components/topbar';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({});

export interface Props extends WithStyles<typeof styles> {}

const HomeComponent = (props: Props) => {
    return (
        <React.Fragment>
            <Topbar />
        </React.Fragment>
    );
};

HomeComponent.prototype = {
    classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(HomeComponent);
