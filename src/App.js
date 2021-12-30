import './App.css';
import {useState,useEffect} from 'react';
import NavBar from "./NavBar";
import Sample from "./Captain"
import About from "./About";
import Feedback from './Feedback';
import Social from './Social';
import Blog from './Blog';
import Blogs from './Blogs';
import Green from './Green';
import { AnimatePresence } from "framer-motion";
import Home from "./Home"
import {Switch, Route, useLocation} from "react-router-dom";
import Preloader from './Preloader';
import Captain from './Captain';
import Campus from './Campus';
function App() {
  const location = useLocation();
  const [isLoaded,setLoaded]=useState(false);
    useEffect(() => {
        setTimeout(()=>setLoaded(true),5500)
    }, [])
  return (
    <div>

        
        <AnimatePresence exitBeforeEnter initial={false}>
      
        <Switch location={location} key={location.pathname}>
          
        <Route exact path={["/", "/Home"]} >
         <NavBar keyID={location.pathname}/>
         {isLoaded?<Home />:<Preloader />}
        </Route>
        
        <Route path="/Feedback">
          <NavBar keyID={location.pathname}/>
          <Feedback />
        </Route>
        <Route path="/About">
          <NavBar keyID={location.pathname}/>
          <About />
        </Route>
        <Route path="/Social">
          <NavBar keyID={location.pathname}/>
          <Social />
        </Route>
        <Route path="/Blog">
          <NavBar keyID={location.pathname}/>
          <Blog />
        </Route>
        <Route path="/Blogs">
          <NavBar keyID={location.pathname}/>
          <Blogs/>
        </Route>
        <Route path="/Green">
          <NavBar keyID='/Home'/>
          <Green/>
        </Route>
        <Route path="/Captain">
          <NavBar keyID='/Home'/>
          <Captain />
        </Route>
        <Route path="/Campus">
          <NavBar keyID='/Home'/>
          <Campus />
        </Route>
        </Switch>
       
        </AnimatePresence>
    </div>

  );
}

export default App;
