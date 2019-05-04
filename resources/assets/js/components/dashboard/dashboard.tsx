import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Drawer from '@material-ui/core/Drawer';
import React, { Component, Fragment } from 'react';
import Topbar from '../topbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './dashboard-style';
import { DashboardProps, module } from './dashboard.model';
import Grid from '@material-ui/core/Grid';

class Dashboard extends Component<DashboardProps> {
    state = {
        module
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Topbar />
                <Drawer anchor='left' />
                <main className={classes.main}>
                    <Grid container spacing={24}>
                        {this.state.module.map(item => (
                            <Grid item xs={12} md={4} key={item.title}>
                                <Card className={classes.card}>
                                    <CardActionArea
                                        className={classes.actionArea}
                                    >
                                        <CardMedia
                                            className={classes.media}
                                            image='/static/images/cards/contemplative-reptile.jpg'
                                            title='Contemplative Reptile'
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant='h5'
                                                component='h2'
                                                className={classes.title}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography component='p'>
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className={classes.action}>
                                        <Button size='small' color='primary'>
                                            {item.ctaText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </main>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Dashboard);
