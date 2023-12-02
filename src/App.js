import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home.js";
import Services from "./Components/Services.js";
import About from "./Components/Aboutus.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
