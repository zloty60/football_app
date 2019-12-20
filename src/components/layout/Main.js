import React from "react";
import { makeStyles, Container } from "@material-ui/core";

export default function Main({ children }) {
  const classses = useStyles();
  return (
    <main className={classses.main}>
      <Container>{children}</Container>
    </main>
  );
}

const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: "64px",
    minHeight: `calc(100vh - 64px)`
  }
}));
