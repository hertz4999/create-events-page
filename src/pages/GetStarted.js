import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// import BorderColorTwoToneIcon from "@material-ui/icons/BorderColorTwoTone";
// import QueueIcon from "@material-ui/icons/Queue";

const useStyles = makeStyles((theme) => ({
  formPaper: {
    display: "flex",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: 300,
    alignItems: "center",
  },

  papers: {
    marginRight: theme.spacing(1),
  },
  leftButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
export default function GetStarted() {
  const classes = useStyles();
  return (
    <Grid container>
      {/* Chart */}
      <Grid item xs={12} md={10} lg={10}>
        <Typography variant="h4" gutterBottom>
          Get Started
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} lg={5} className={classes.papers}>
        <Paper className={classes.formPaper}>
          <Grid item xs={12} md={12} lg={12}>
            {" "}
            <Typography color="primary" variant="h4" gutterBottom>
              Customize Your site
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5} lg={5} className={classes.papers}>
        <Paper className={classes.formPaper}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography color="primary" variant="h4" gutterBottom>
              Set up Events
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
