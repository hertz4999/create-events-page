import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
//import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";

import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from "@material-ui/core/Divider";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PublicIcon from "@material-ui/icons/Public";

// import CalendarImg from "../images/Calendar.jpg";
// import backGroundImg from "../images/background.jpg";

const useStyles = makeStyles((theme) => ({
  formPaper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  coverImgPaper: {
    // flexDirection: "column",
    // justifyContent: "flex-end",
    height: 400,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  coverImgGrid: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  dividerStyle: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },

  formMargin: {
    margin: theme.spacing(1),
  },

  calendarField: {
    // width: "50ch",
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
}));
export default function MySite() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container>
        {/* Chart */}
        <Grid item xs={12} md={10} lg={10}>
          <Typography variant="h4" gutterBottom>
            My Site
          </Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <Paper className={classes.formPaper}>
            <FormControl
              fullWidth
              className={classes.formMargin}
              variant="filled"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                My site Url
              </InputLabel>
              <FilledInput
                id="outlined-adornment-amount"
                value="johndoe.namaste.fit"
                startAdornment={
                  <InputAdornment position="start">
                    <PublicIcon />
                  </InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            {/* <Paper
              variant="outlined"
              className={classes.coverImgPaper}
              style={{ backgroundImage: `url(${backGroundImg})` }}
            >
              <Grid container className={classes.coverImgGrid}>
                {" "}
                <Avatar alt="Profile Pic" src={CalendarImg} />
              </Grid>{" "}
            </Paper>
            */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <Paper className={classes.formPaper}>
            {/* <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}> */}
            <FormControl fullWidth className={classes.formMargin}>
              <TextField
                id="outlined-basic"
                label="Name Placeholder"
                // variant="outlined"
              />
              {/* </Grid>
            <Grid item xs={12} md={12} lg={12}> */}
            </FormControl>
            <FormControl fullWidth className={classes.formMargin}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                label="Lorem Ipsum"
                // variant="outlined"
              />
            </FormControl>
            <Grid container justify="space-between">
              <Grid item xs={12} md={3} lg={3}>
                <FormControl fullWidth>
                  <TextField
                    id="city"
                    label="City"
                    defaultValue="Pune"
                    className={classes.calendarField}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
                <FormControl fullWidth>
                  <TextField
                    id="state"
                    label="State"
                    defaultValue="Maha"
                    className={classes.calendarField}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
                <FormControl fullWidth>
                  <TextField
                    id="country"
                    label="Country"
                    defaultValue="India"
                    className={classes.calendarField}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Divider className={classes.dividerStyle} />

            <FormControl
              fullWidth
              className={classes.formMargin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Instagram
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value=""
                startAdornment={
                  <InputAdornment position="start">
                    <InstagramIcon color="secondary" />
                  </InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            <FormControl
              fullWidth
              className={classes.formMargin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Facebook
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value=""
                startAdornment={
                  <InputAdornment position="start">
                    <FacebookIcon color="primary" />
                  </InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            <FormControl
              fullWidth
              className={classes.formMargin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Youtube
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value=""
                startAdornment={
                  <InputAdornment position="start">
                    <YouTubeIcon color="secondary" />
                  </InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            <FormControl
              fullWidth
              className={classes.formMargin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Google
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value=""
                startAdornment={
                  <InputAdornment position="start">
                    <PublicIcon />
                  </InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Paper>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={10} lg={10}>
          <FormControl fullWidth>
            <Button variant="contained" size="large" color="primary">
              Publish
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}
