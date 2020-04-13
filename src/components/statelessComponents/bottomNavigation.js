/**
 * Functional component
 * Following ES6 syntax
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: props => Object.keys(props).includes('width') ? props.width: 500,
  },
});

const LabelBottomNavigation = ( props ) => {
  const classes = useStyles(props);
  return (
    <BottomNavigation 
      showLabels
      value={props.buttonNavigationValue} 
      onChange={(event, newValue) => {
        props.change(newValue);
      }}
      className={classes.root}
    >
      {props.buttonNavigationContents.map((button, index) => 
        <BottomNavigationAction 
          key={index} 
          label={button.label} 
          value={button.value} 
          icon={button.icon} 
          />
      )}
    </BottomNavigation>
  );
}

export default LabelBottomNavigation;
