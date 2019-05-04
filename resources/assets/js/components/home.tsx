import * as React from 'react';
import { createStyles, WithStyles, withStyles, Theme } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import Topbar from '../components/topbar';

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
