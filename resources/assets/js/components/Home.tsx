import * as React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import * as PropTypes from 'prop-types';

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
})

export interface Props extends WithStyles<typeof styles> {}

const HomeComponent = (props: Props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Student Portal
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

HomeComponent.prototype = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(HomeComponent);
