import './App.css';
import NavBar from "./NavBar";
import Sample from "./Sample"
import { AnimatePresence } from "framer-motion";
import Home from "./Home"
import { Lines } from 'react-preloaders';
import {Switch, Route, useLocation} from "react-router-dom";

function App() {
  const location = useLocation();
  
  return (
    <div>

        <NavBar/>
        <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/Title">
          <Sample />
        </Route>
        </Switch>
        </AnimatePresence>
    </div>

  );
}

export default App;
