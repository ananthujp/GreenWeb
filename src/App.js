import './App.css';
import {useState,useEffect} from 'react';
import NavBar from "./NavBar";
import Sample from "./Sample"
import { AnimatePresence } from "framer-motion";
import Home from "./Home"
import {Switch, Route, useLocation} from "react-router-dom";
import Preloader from './Preloader';
function App() {
  const location = useLocation();
  const [isLoaded,setLoaded]=useState(false);
    useEffect(() => {
        setTimeout(()=>setLoaded(true),4000)
    }, [])
  return (
    <div>

        <NavBar/>
        <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
        <Route exact path="/">
        {isLoaded?<Home />:<Preloader />}
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
