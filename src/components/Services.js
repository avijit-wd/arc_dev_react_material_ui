import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonArrow from "./ui/ButtonArrow";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1rem",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceBlock: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

const Services = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matches ? 0 : "5em",
          marginTop: matches ? "1em" : "2em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matches ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/* MobileApp Block */}
        <Grid
          container
          direction="row"
          justify={matches ? "center" : "flex-end"}
          className={classes.serviceBlock}
          style={{ marginTop: matches ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matches ? "center" : undefined,
              width: matches ? undefined : "35em",
            }}
          >
            <Typography variant="h4">iOS/Android Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Increase your web experience and create a standalone app{" "}
              {matches ? <br /> : null} with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matches ? 0 : "5em" }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt="Mobile phone Icon"
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* Services Block */}
        <Grid
          container
          direction="row"
          justify={matches ? "center" : undefined}
          className={classes.serviceBlock}
        >
          <Grid
            item
            style={{
              marginLeft: matches ? 0 : "5em",
              textAlign: matches ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt="Custom software Icon"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* Websites Block */}
        <Grid
          container
          direction="row"
          justify={matches ? "center" : "flex-end"}
          className={classes.serviceBlock}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            style={{
              textAlign: matches ? "center" : undefined,
              width: matches ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach more. Discover more. Search more.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={websitesIcon}
              alt="Website Icon"
              style={{ marginRight: matches ? 0 : "5em" }}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
