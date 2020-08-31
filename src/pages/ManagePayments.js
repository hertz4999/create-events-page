import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  formPaper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  rightButton: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  leftButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
export default function ManagePayments() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={10} lg={10}>
        <Typography variant="h4" gutterBottom>
          Payment Methods
        </Typography>
      </Grid>
      <Grid item xs={12} md={10} lg={10}>
        <Paper className={classes.formPaper}>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h5" gutterBottom>
                Razorpay
              </Typography>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <Button
                size="large"
                color="primary"
                variant="outlined"
                className={classes.leftButton}
              >
                Edit account Credentials
              </Button>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.rightButton}
              >
                Create Account
              </Button>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Typography
                gutterBottom
                variant="h8"
                component="h2"
                color="primary"
              >
                Your Razorpay account is set up
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
