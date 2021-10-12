
import './App.css';
import Navbar from './components/Navbar.js';
import PrenavBar from './components/PrenavBar.js';
import {  BrowserRouter as Router} from "react-router-dom"
import Slider from './components/Slider'
import data from './data/data.json'
import Offers from './components/Offers.js'
import Heading  from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"



function App() {
  return (
    <Router>
    <PrenavBar />
    <Navbar />
    <Slider start={data.banner.start} />
    <Offers offer={data.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProduct starProduct={data.starProduct} />
  
    </Router>
  );
}

export default App;
