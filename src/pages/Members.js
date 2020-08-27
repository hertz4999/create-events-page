import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, property_1, property_2, property_3, property_4) {
  return { name, property_1, property_2, property_3, property_4 };
}

const rows = [
  createData("John Doe", 159, 1.0, 1, 1.0),
  createData("Jane Doe", 237, 2.0, 2, 2.0),
  createData("ABCD", 262, 3.0, 3, 3.0),
  createData("EFGH", 305, 4.0, 4, 4.0),
  createData("IJKL", 356, 5.0, 5, 5.0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function Members() {
  const classes = useStyles();

  return (
    <Grid container>
      {/* Chart */}
      <Grid item xs={12} md={10} lg={10}>
        <Typography variant="h4" gutterBottom>
          Members
        </Typography>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Member Name</StyledTableCell>
              <StyledTableCell align="right">Property_1</StyledTableCell>
              <StyledTableCell align="right">Property_2</StyledTableCell>
              <StyledTableCell align="right">Property_3</StyledTableCell>
              <StyledTableCell align="right">Property_4</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.property_1}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.property_2}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.property_3}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.property_4}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
