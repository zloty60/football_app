import React from "react";
import {
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ListItemLeague({ el }) {
  const classes = useStyles();
  return (
    <ListItem divider={true} disableGutters={true}>
      <ListItemLink to={`/ligi/${el.id}`}>
        <ListItemAvatar>
          <Avatar
            src={el.logo}
            alt={`logo ${el.name}`}
            className={classes.flag}
          />
        </ListItemAvatar>
        <ListItemText primary={el.name} />
      </ListItemLink>
    </ListItem>
  );
}

function ListItemLink(props) {
  return <ListItem disableGutters={true} button component={Link} {...props} />;
}

const useStyles = makeStyles(theme => ({
  flag: {
    boxShadow: theme.shadows[9]
  }
}));
