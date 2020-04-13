/**
 * Functional component
 * Following ES6 syntax
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const header = ( props ) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img
                            alt=""
                            src={props.banner}
                            width="40"
                            height="40"
                        />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Button color="inherit" href="https://github.com/Utshab500/covid-19-dashboard/tree/master" target="_blank">
                       Fork here&nbsp;<GitHubIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default header;