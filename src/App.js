
import './App.css';
import Navbar from './components/Navbar.js';
import PrenavBar from './components/PrenavBar.js';
import {  BrowserRouter as Router} from "react-router-dom"
import Slider from './components/Slider'
import {banner} from './data/data.json'

function App() {
  return (
    <Router>
    <PrenavBar />
    <Navbar />
    <Slider start={banner.start} />
  
    </Router>
  );
}

export default App;
