import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import QueueIcon from "@material-ui/icons/Queue";
import PeopleIcon from "@material-ui/icons/People";
import PaymentIcon from "@material-ui/icons/Payment";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Get Started" />
    </ListItem>
    <ListItem component={Link} to="/my-site" button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="My Site" />
    </ListItem>
    <ListItem component={Link} to="/my-events" button>
      <ListItemIcon>
        <EventAvailableIcon />
      </ListItemIcon>
      <ListItemText primary="My Events" />
    </ListItem>
    <ListItem component={Link} to="/create-event" selected={0} button>
      <ListItemIcon>
        <QueueIcon />
      </ListItemIcon>
      <ListItemText primary="Create Event" />
    </ListItem>
    <ListItem component={Link} to="/members" button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Members" />
    </ListItem>
    <ListItem component={Link} to="/manage-payments" button>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Payments" />
    </ListItem>
  </div>
);
