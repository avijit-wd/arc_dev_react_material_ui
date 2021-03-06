import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "0.75rem",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        {/* main container */}
        <Grid container className={classes.mainContainer} justify="center">
          {/* First Item */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(0)}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          {/* Second Item */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                to="/mobileapps"
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/website"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          {/* Third Item */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          {/* Forth Item */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          {/* Fifth Item */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                onClick={() => setValue(4)}
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={footerAdornment}
        alt="black decorative"
        className={classes.adornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="Facebook logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="Twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="Instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
