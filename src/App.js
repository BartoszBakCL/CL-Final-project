import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import Menu from "./components/common/Menu"
import "./scss/main.scss"
import Footer from "./components/common/Footer"
import GetStarted from "./components/pages/GetStarted";
import Pushups from "./components/pages/Pushups";
import Pullups from "./components/pages/Pullups";
import Auth from "./components/pages/Auth";


function App() {
  return (
   <BrowserRouter>
       <Menu/>
     <Routes>
         <Route exact path="/" element={<Home/>}/>
         {/*<Route exact path="https://bartoszbakcl.github.io/CodersLab_Final_Project/" element={<Home/>}/>*/}
         <Route exact path="/getstarted" element={<GetStarted/>}/>
         <Route exact path="/getstarted/pushups" element={<Pushups/>}/>
         <Route exact path="/getstarted/pullups" element={<Pullups/>}/>
         <Route exact path="/kontakt" element={<Contact/>}/>
         <Route exact path="/aboutus" element={<About/>}/>
         <Route exact path="/something" element={<Auth/>}/>
     </Routes>
       <Footer/>
     </BrowserRouter>
  );
}

export default App;