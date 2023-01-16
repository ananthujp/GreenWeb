import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import About from "./About";
import Feedback from "./Feedback";
import Social from "./Social";
import Blog from "./Blog";
import Blogs from "./Blogs";
import Green from "./Green";
import AddEvent from "./AddEvent";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import { Switch, Route, useLocation } from "react-router-dom";
import Preloader from "./Preloader";
import Captain from "./Captain";
import Campus from "./Campus";
import Campaigns from "./Campaigns";
import SustainableCampusInput from "./SustainableCampusInput";
import ReactGA from "react-ga";
import Milestones from "./milestones/Milestone";

function App() {
  const TRACKING_ID = "UA-210876047-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  const location = useLocation();
  const Load = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
  const [initialFlag, setFlag] = useState(true);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), Load);
    setTimeout(() => setFlag(false), 6000 + Load);
    //ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path={["/", "/Home"]}>
            <NavBar keyID={location.pathname} />
            {isLoaded ? <Home initialFlag={initialFlag} /> : <Preloader />}
          </Route>

          <Route path="/Feedback">
            <NavBar keyID={location.pathname} />
            <Feedback />
          </Route>
          <Route path="/About">
            <NavBar keyID={location.pathname} />
            <About />
          </Route>
          <Route path="/Social">
            <NavBar keyID={location.pathname} />
            <Social />
          </Route>
          <Route path="/Blog">
            <NavBar keyID={location.pathname} />
            <Blog />
          </Route>
          <Route path="/Blogs">
            <NavBar keyID={location.pathname} />
            <Blogs />
          </Route>
          <Route path="/Green">
            <NavBar keyID="/Title" />
            <Green />
          </Route>
          <Route path="/Captain">
            <NavBar keyID="/Title" />
            <Captain />
          </Route>
          <Route path="/Campus">
            <NavBar keyID="/Title" />
            <Campus />
          </Route>
          <Route path="/Campaigns">
            <NavBar keyID="/Title" />
            <Campaigns />
          </Route>
          <Route path="/AddData">
            <NavBar keyID="/AddData" />
            <SustainableCampusInput />
          </Route>
          <Route path="/AddEvent">
            <NavBar keyID="/AddEvent" />
            <AddEvent />
          </Route>
          <Route path="/Milestones">
            <NavBar keyID="/Milestones" />
            <Milestones />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
