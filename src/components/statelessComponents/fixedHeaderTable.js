import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  container: {
    maxHeight: 440,
  }
});

const CustomizedTables = ( props ) => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
                {props.heading.map((h, index) => (
                    <StyledTableCell key={index}>{h}</StyledTableCell>
                ))}
    
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, index) => {
              if(row.length > 0) {
                  return (
                    <StyledTableRow key={index}>
                        {row.map((d, i) => (
                            <StyledTableCell key={i} component="th" scope="row">
                                {d}
                            </StyledTableCell>
                        ))}
                    </StyledTableRow>
                  );
              }
        })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;