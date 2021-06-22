import React, { useState } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />

          <Route exact path="/services" component={() => <div>Services</div>} />

          <Route
            exact
            path="/customSoftware"
            component={() => <div>Custom Software</div>}
          />

          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          />

          <Route exact path="/websites" component={() => <div>Websites</div>} />

          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />

          <Route exact path="/about" component={() => <div>About us</div>} />

          <Route
            exact
            path="/contact"
            component={() => <div>contact us</div>}
          />

          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
