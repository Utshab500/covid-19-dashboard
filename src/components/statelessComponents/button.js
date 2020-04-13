/**
 * Functional component
 * Following ES6 syntax
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme, props) => ({
    button: {
      margin: theme.spacing(1),
      maxWidth: props => Object.keys(props).includes('width') ? props.width: 'auto',
    },
}));

const button = ( props ) => {
    const classes = useStyles(props);
    let disabled = false;
    let color = 'primary';
    let variant = 'contained';
    let startIcon = null;
    let endIcon = null;
    let clicked = null;

    if (Object.keys(props).includes('disabled')) {
        disabled = props.disabled;
    }

    if (Object.keys(props).includes('variant')) {
        variant = props.variant;
    }

    if (Object.keys(props).includes('color')) {
        color = props.color;
    }

    if (Object.keys(props).includes('startIcon')) {
        startIcon = props.startIcon;
    }

    if (Object.keys(props).includes('endIcon')) {
        endIcon = props.endIcon;
    }

    if (Object.keys(props).includes('clicked')) {
        clicked = props.clicked;
    }

    return (
        <Button 
            disabled={disabled}
            className={classes.root}
            variant={variant} 
            color={color}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={clicked}
            >
            {props.label}
        </Button>
    );
}

export default button;