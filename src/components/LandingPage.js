import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CallToAction from "./ui/CallToAction";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
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
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
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
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const LandingPage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        {/* Hero Block */}
        <Grid item>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology <br />
                to the Midwest
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    component={Link}
                    to="/estimate"
                    className={classes.estimateButton}
                    variant="contained"
                    onClick={() => setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/revolution"
                    className={classes.learnButtonHero}
                    variant="outlined"
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
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
          {/* MobileApp Block */}
          <Grid
            container
            direction="row"
            justify={matches ? "center" : "flex-end"}
            className={classes.serviceBlock}
          >
            <Grid
              item
              style={{
                textAlign: matches ? "center" : undefined,
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
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {/* Websites Block */}
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
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {/* Revolution Section*/}
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: "60em", marginTop: "12em" }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button
                      component={Link}
                      to="/revolution"
                      className={classes.learnButtonHero}
                      variant="outlined"
                      onClick={() => setValue(2)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.blue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>

        <Grid item>
          {/* Information Block */}
          <Grid
            container
            style={{ height: "60em" }}
            direction="row"
            alignItems="center"
            className={classes.infoBackground}
          >
            <Grid
              item
              sm
              container
              style={{
                textAlign: matchesXS ? "center" : "inherit",
              }}
              direction={matchesXS ? "column" : "row"}
            >
              <Grid
                item
                sm
                style={{ marginLeft: matchesXS ? 0 : matches ? "2em" : "5em" }}
              >
                <Grid
                  container
                  direction="column"
                  style={{ marginBottom: matchesXS ? "5em" : 0 }}
                >
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/about"
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ color: "white", borderColor: "white" }}
                      onClick={() => setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matches ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">Say Hello!</Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ color: "white", borderColor: "white" }}
                      onClick={() => setValue(4)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* Call To Action */}
          <CallToAction setValue={setValue} />
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
