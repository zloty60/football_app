import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  Divider
} from "@material-ui/core";

import LanguageIcon from "@material-ui/icons/Language";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

import CardTitle from "./../../components/common/CardTitle";

export default function CardInfo({
  details: {
    strLeague,
    strBadge,
    strTeamBadge,
    intFormedYear,
    strYoutube,
    strWebsite,
    strTwitter,
    strFacebook,
    strTeam,
    idLeague
  },
  fullHeight,
  teamView
}) {
  const classes = useStyles();
  return (
    <>
      <Card className={fullHeight ? classes.fullHeight : null}>
        <CardTitle title="informacje" />
        <Divider />
        <CardContent>
          <Grid
            container
            alignItems="center"
            className={fullHeight ? classes.mt : null}
          >
            <Grid item xs={3} md={4} className={classes.imgWrapper}>
              <img
                src={strBadge || strTeamBadge}
                alt="logo ligi"
                className={classes.img}
              />
            </Grid>
            <Grid item xs={9} md={8}>
              <div className={classes.leagueDetailsWrapper}>
                <Typography className={classes.leagueName} gutterBottom={true}>
                  {strTeam || strLeague}
                </Typography>
                <Typography gutterBottom={true}>
                  Data założenia: {intFormedYear}
                </Typography>
                {teamView && (
                  <>
                    <Link
                      to={`/ligi/${idLeague}`}
                      className={classes.linkLeague}
                    >
                      {strLeague}
                    </Link>{" "}
                  </>
                )}
                {strWebsite && (
                  <a
                    href={`https://${strWebsite}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    <LanguageIcon
                      className={`${classes.icon_web} ${classes.icon}`}
                    />
                  </a>
                )}
                {strYoutube && (
                  <a
                    href={`https://${strYoutube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    <YouTubeIcon
                      className={`${classes.icon_yt} ${classes.icon}`}
                    />
                  </a>
                )}
                {strTwitter && (
                  <a
                    href={`https://${strTwitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    <TwitterIcon
                      className={`${classes.icon_twitter} ${classes.icon}`}
                    />
                  </a>
                )}
                {strFacebook && (
                  <a
                    href={`https://${strFacebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    <FacebookIcon
                      className={`${classes.icon_facebook} ${classes.icon}`}
                    />
                  </a>
                )}
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

const useStyles = makeStyles(theme => ({
  img: {
    width: "65px",
    [theme.breakpoints.up("md")]: {
      width: "130px"
    }
  },
  leagueName: {
    fontWeight: "bold"
  },
  leagueDetailsWrapper: {
    paddingLeft: "15px"
  },
  link: {
    color: "#000",
    marginRight: "6px"
  },
  imgWrapper: {
    display: "flex"
  },
  icon_yt: {
    color: "#FF0000"
  },
  icon_twitter: {
    color: "#1DA1F2"
  },
  icon_web: {
    color: "#283593"
  },
  icon_facebook: {
    color: "#4267B2"
  },
  icon: {
    fontSize: "30px"
  },
  fullHeight: {
    height: "100%"
  },
  mt: {
    [theme.breakpoints.up("md")]: {
      marginTop: "32px"
    }
  },
  linkLeague: {
    color: "#000",
    display: "block",
    marginBottom: "0.35em",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));
