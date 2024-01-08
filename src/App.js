import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import End from "./components/End/End";
import Feature from "./components/Feature/Feature";
import Home from "./components/Home/Home";
import Maps from "./components/Maps/Maps";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Professional from "./components/Professional/Professional";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Service />
      <About />
      <Professional />
      <Feature />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Maps />
      <End />
    </div>
  );
}
export default App;
