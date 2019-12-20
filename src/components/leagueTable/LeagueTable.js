import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  makeStyles
} from "@material-ui/core";

export default function LeagueTable({ table, isLoadedData }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Nazwa drużyny</TableCell>
            <TableCell>Pkt</TableCell>
            <TableCell>W</TableCell>
            <TableCell>R</TableCell>
            <TableCell>P</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoadedData && table ? (
            table.map((team, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Link to={`/klub/${team.teamid}`} className={classes.link}>
                    {team.name}
                  </Link>
                </TableCell>
                <TableCell>{team.total}</TableCell>
                <TableCell>{team.win}</TableCell>
                <TableCell>{team.draw}</TableCell>
                <TableCell>{team.loss}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableLoading />
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  link: {
    color: "#000",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

const TableLoading = () => {
  let table = [];
  for (let i = 0; i < 20; i++) {
    table.push(
      <TableRow key={i}>
        <TableCell>
          <LinearProgress />
        </TableCell>
        <TableCell>
          <LinearProgress />
        </TableCell>
        <TableCell>
          <LinearProgress />
        </TableCell>
        <TableCell>
          <LinearProgress />
        </TableCell>
        <TableCell>
          <LinearProgress />
        </TableCell>
        <TableCell>
          <LinearProgress />
        </TableCell>
      </TableRow>
    );
  }
  return table;
};
