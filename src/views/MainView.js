import React from "react";
import {
  List,
  Card,
  CardContent,
  makeStyles,
  Divider,
  Box,
} from "@material-ui/core";

import ListItemLeague from "./../components/listItemLeague/ListItemLeague";
import CardTitle from "./../components/common/CardTitle";

import unitedKingdom from "./../assets/flags/united-kingdom.png";
import france from "./../assets/flags/france.png";
import germany from "./../assets/flags/germany.png";
import italy from "./../assets/flags/italy.png";
import spain from "./../assets/flags/spain.png";
import belgium from "./../assets/flags/belgium.png";
import netherlands from "./../assets/flags/netherlands.png";
import portugal from "./../assets/flags/portugal.png";

const links = [
  {
    id: "4328",
    name: "English Premier League",
    logo: unitedKingdom,
  },
  {
    id: "4335",
    name: "Spanish La Liga",
    logo: spain,
  },
  {
    id: "4332",
    name: "Italian Serie A",
    logo: italy,
  },
  {
    id: "4334",
    name: "French Ligue 1",
    logo: france,
  },

  {
    id: "4331",
    name: "German Bundesliga",
    logo: germany,
  },
  {
    id: "4344",
    name: "Portuguese Primeira Liga",
    logo: portugal,
  },
  {
    id: "4337",
    name: "Dutch Eredivisie",
    logo: netherlands,
  },
  {
    id: "4338",
    name: "Belgian Jupiler League",
    logo: belgium,
  },
];

export default function MainView() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Card className={classes.warning}>
        <CardContent>
          Aplikacja nie działa teraz poprawnie ponieważ korzysta z api, które w
          związku z COVID-19 uległo zmianie. W najbliższym czasie projekt
          zostanie zaktualizowany
        </CardContent>
      </Card>
      <Box mb={5} />
      <Card className={classes.card}>
        <CardTitle title="Wybierz ligę:" />
        <Divider />
        <CardContent className={classes.cardContent}>
          <List className={classes.list}>
            {links.map((el) => (
              <ListItemLeague key={el.id} el={el} />
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100%",
    maxWidth: "650px",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "35px",
    marginTop: "40px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "65px",
    },
  },
  cardContent: {
    paddingTop: 0,
  },
  list: {
    paddingTop: 0,
  },
  flag: {
    boxShadow: theme.shadows[14],
  },
  warning: {
    backgroundColor: "#E57373",
  },
}));
