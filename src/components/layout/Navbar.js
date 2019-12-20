import React from "react";
import { AppBar, Toolbar, Container, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Link to={"/"} className={classes.link}>
            football app
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const useStyles = makeStyles({
  link: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: "1.2px"
  }
});
