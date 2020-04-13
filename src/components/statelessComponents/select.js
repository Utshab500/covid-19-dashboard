/**
 * Functional component
 * Following ES6 syntax
 */

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: props => Object.keys(props).includes('width') ? props.width: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const select = ( props ) => {

    const classes = useStyles(props);
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.selectedValue}
                    onChange={props.changed}
                    >
                    {props.selectValues.map((v, index) => 
                        <MenuItem 
                            key={index} 
                            value={v.value}>
                                {v.name}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
}

export default select;