import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: props => Object.keys(props).includes('width') ? props.width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SimpleAlerts = ( props ) => {
  const classes = useStyles(props);
  let variant = 'filled';

  if (Object.keys(props).includes('variant')) {
    variant = props.variant;
}

  return (
    <div className={classes.root}>
      <Alert variant={variant} severity={props.type}>
        {props.message}
      </Alert>
    </div>
  );
}

export default SimpleAlerts;
