import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
// import Box from "@material-ui/core/Box";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { mainListItems } from "../Components/listItems";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Namaste.fit
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formPaper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  formMargin: {
    margin: theme.spacing(1),
  },
  formWithoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    marginRight: theme.spacing(25),
    marginLeft: theme.spacing(1),
  },
  calendarField: {
    // width: "50ch",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
  selectField: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),

    // minWidth: "50ch",
  },
  priceTextField: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(3),
    // minWidth: "50ch",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Namaste.fit
          </Typography>
          <IconButton color="inherit">
            <PowerSettingsNewIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        {/* <Divider />
        <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            {/* Chart */}
            <Grid item xs={12} md={10} lg={10}>
              <Paper className={classes.formPaper}>
                {/* <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={12}> */}
                <FormControl fullWidth className={classes.formMargin}>
                  <TextField
                    id="outlined-basic"
                    label="Event Name"
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
                    label="Event Description"
                    // variant="outlined"
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
                        // onChange={handleChange}
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

                        // onChange={handleChange}
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
                    control={
                      <Checkbox
                        // checked={true}
                        name="checkedA"
                        color="primary"
                      />
                    }
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
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                        startAdornment={
                          <InputAdornment position="start">INR</InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={0} md={7} lg={7}></Grid>
                </Grid>
                {/* </Grid>
                  <Grid item xs={12} md={12} lg={12}></Grid>
                  <Grid item xs={12} md={12} lg={12}></Grid> */}
                {/* </Grid> */}
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
                    // variant="outlined"
                  />
                  {/* </Grid>
                  <Grid item xs={12} md={12} lg={12}> */}
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
        </Container>
      </main>
    </div>
  );
}
