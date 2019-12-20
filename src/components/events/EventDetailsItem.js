import React from "react";
import { makeStyles } from "@material-ui/core";

export default function ResultItem({ side, data, txt }) {
  const classes = useStyles();
  return (
    <>
      {data ? (
        <div className={classes.resultItemWrapper}>
          <span
            className={
              side === "right"
                ? `${classes.resultItem}  ${classes.resultItemLRight} `
                : classes.resultItem
            }
          >
            {txt}:
          </span>
          {data
            ? data.split(";").map((el, i) => (
                <span
                  key={i}
                  className={
                    side === "right"
                      ? `${classes.resultItem}  ${classes.resultItemLRight} `
                      : classes.resultItem
                  }
                >
                  {el}
                </span>
              ))
            : null}
        </div>
      ) : null}
    </>
  );
}

const useStyles = makeStyles({
  resultItem: {
    fontSize: "15px",
    display: "block"
  },
  resultItemLRight: {
    textAlign: "right"
  },
  resultItemWrapper: {
    marginBottom: "12px"
  }
});
