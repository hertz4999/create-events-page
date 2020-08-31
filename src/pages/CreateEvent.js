import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formPaper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  formMargin: {
    margin: theme.spacing(1),
  },

  calendarField: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
  selectField: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
  priceTextField: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));
export default function CreateEvent() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container>
        <Grid item xs={12} md={10} lg={10}>
          <Typography variant="h4" gutterBottom>
            Create Event
          </Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <Paper className={classes.formPaper}>
            <FormControl fullWidth className={classes.formMargin}>
              <TextField id="outlined-basic" label="Event Name" />
            </FormControl>
            <FormControl fullWidth className={classes.formMargin}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                label="Event Description"
              />
            </FormControl>
            <Grid container justify="flex-start">
              <Grid item xs={12} md={5} lg={5}>
                <FormControl fullWidth>
                  <TextField
                    id="datetime-local"
                    label="Start Date"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.calendarField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={0} md={2} lg={2}></Grid>
              <Grid item xs={12} md={5} lg={5}>
                <FormControl fullWidth>
                  <TextField
                    id="datetime-local"
                    label="End Date"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.calendarField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container justify="flex-start">
              <Grid item xs={12} md={5} lg={5}>
                <FormControl className={classes.selectField} fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Timezone
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=""
                  >
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>USA</MenuItem>
                    <MenuItem value={30}>Canada</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={0} md={2} lg={2}></Grid>
              <Grid item xs={12} md={5} lg={5}>
                <FormControl className={classes.selectField} fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Recurrence
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=""
                  >
                    <MenuItem value={10}>Never Repeat</MenuItem>
                    <MenuItem value={20}>Weekly</MenuItem>
                    <MenuItem value={30}>Daily</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <br />
            <FormControl className={classes.formMargin}>
              <FormControlLabel
                control={<Checkbox name="checkedA" color="primary" />}
                label="This is a free event"
              />
            </FormControl>
            <br />
            <Grid container justify="flex-start">
              <Grid item xs={12} md={5} lg={5}>
                <FormControl className={classes.priceTextField} fullWidth>
                  <InputLabel htmlFor="standard-adornment-amount">
                    Amount
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">INR</InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={0} md={7} lg={7}></Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={10} lg={10}>
          <Paper className={classes.formPaper}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Video Conference Link"
                variant="outlined"
              />
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={10} lg={10}>
          <FormControl fullWidth>
            <Button variant="contained" size="large" color="primary">
              Save & Continue
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}
