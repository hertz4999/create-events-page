import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
  createData("John Doe", 1, 1.0),
  createData("Jane Doe", 2, 2.0),
  createData("ABCD", 3, 3.0),
  createData("EFGH", 4, 4.0),
  createData("IJKL", 5, 5.0),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
  rightButton: {
    // marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // marginRight: theme.spacing(1),
  },
}));

export default function Members() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={10} lg={10}>
        <Typography variant="h4" gutterBottom>
          Members
        </Typography>
      </Grid>
      <Grid item xs={0} md={3} lg={3}></Grid>
      <Grid item xs={12} md={9} lg={9}>
        <Grid container>
          <Grid justify="flex-end" container>
            {/* <Grid item xs={12} md={12} lg={12}> */}
            <Grid item xs={12} md={2} lg={2}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className={classes.rightButton}
              >
                Add members
              </Button>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className={classes.rightButton}
              >
                Edit members
              </Button>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className={classes.rightButton}
              >
                Enroll
              </Button>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className={classes.rightButton}
              >
                Unenroll
              </Button>
            </Grid>
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell align="right">Property_1</StyledTableCell> */}
              <StyledTableCell align="right">Member Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Event</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                {/* <StyledTableCell align="right">
                  {row.property_1}
                </StyledTableCell> */}
                <StyledTableCell align="right">
                  {row.property_2}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.property_3}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
