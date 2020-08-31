import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CalendarImg from "../images/Calendar.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "lg",
    marginBottom: theme.spacing(1),
  },
  topButton: {
    marginBottom: theme.spacing(5),
  },
}));

export default function MyEvents() {
  const classes = useStyles();
  const eventData = [
    {
      title: "Event Title 2",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi ac ligula sodales finibus vitae egestas dui. Aliquam in laoreet augue, a elementum justo. Cras sed mi scelerisque, efficitur lectus vulputate, rutrum neque.",
      price: "INR 500",
      frequency: "Does not repeat",
      date: "27/08/2020 at 8:15am",
    },
    {
      title: "Event Title 2",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi ac ligula sodales finibus vitae egestas dui. Aliquam in laoreet augue, a elementum justo. Cras sed mi scelerisque, efficitur lectus vulputate, rutrum neque.",
      price: "INR 500",
      frequency: "Does not repeat",
      date: "27/08/2020 at 8:15am",
    },
    {
      title: "Event Title 2",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi ac ligula sodales finibus vitae egestas dui. Aliquam in laoreet augue, a elementum justo. Cras sed mi scelerisque, efficitur lectus vulputate, rutrum neque.",
      price: "INR 500",
      frequency: "Does not repeat",
      date: "27/08/2020 at 8:15am",
    },
    {
      title: "Event Title 2",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi ac ligula sodales finibus vitae egestas dui. Aliquam in laoreet augue, a elementum justo. Cras sed mi scelerisque, efficitur lectus vulputate, rutrum neque.",
      price: "INR 500",
      frequency: "Does not repeat",
      date: "27/08/2020 at 8:15am",
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h4" gutterBottom>
          My Events
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12} className={classes.topButton}>
        <Button variant="contained" size="large" color="primary">
          Create Event
        </Button>
      </Grid>
      {eventData.map((eventData) => {
        return (
          <Card className={classes.root}>
            <Grid container>
              <Grid item xs={12} md={3} lg={3}>
                <CardMedia
                  component="img"
                  alt="Event Image"
                  // height="140"
                  image={CalendarImg}
                  title="Event Image"
                />
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <CardContent>
                  <Grid container>
                    <Grid item xs={12} md={9} lg={9}>
                      <Typography gutterBottom variant="h4" component="h2">
                        {eventData.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                      <Typography gutterBottom variant="h8" component="h2">
                        {eventData.date}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                      >
                        {eventData.desc}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Typography gutterBottom variant="h8" component="h2">
                        {eventData.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                      <Typography gutterBottom variant="h8" component="h2">
                        {eventData.frequency}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                      <CardActions>
                        <Button size="large" color="primary">
                          Edit
                        </Button>
                        <Button
                          size="large"
                          variant="contained"
                          color="primary"
                        >
                          Start
                        </Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </Grid>
  );
}
