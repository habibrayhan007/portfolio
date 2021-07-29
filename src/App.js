
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import YouTube from './Components/YouTube/YouTube'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/>
      <About/>
      <Skills/>
      <YouTube/>
      <Contact/> */}
        
        <Switch>
              <Route exact path="/"> <Home/> </Route>
              <Route path="/about"> <About/> </Route>
              <Route path="/skills"> <Skills/> </Route>
              <Route path="/youtube"> <YouTube/> </Route>
              <Route path="/contact"> <Contact/> </Route>
              
        </Switch>
        
      <Footer/>
    </div>
  );
}

export default App;
