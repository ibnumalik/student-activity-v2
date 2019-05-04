import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        grow: {
            flexGrow: 1
        },
        unlink: {
            textDecoration: 'none',
            color: 'rgba(0, 0, 0, 0.87)'
        }
    });

export interface Props extends WithStyles<typeof styles> {}

const TopbarComponent = (props: Props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <AppBar position='static' color='default'>
                <Toolbar>
                    <Typography
                        variant='h6'
                        color='inherit'
                        className={classes.grow}
                    >
                        <Link className={classes.unlink} to='/'>
                            Student Portal
                        </Link>
                    </Typography>
                    <Button color='inherit'>
                        <Link className={classes.unlink} to='login'>
                            Login
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

TopbarComponent.prototype = {
    classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(TopbarComponent);
