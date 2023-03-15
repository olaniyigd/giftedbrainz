import './App.css';
import Nav from "./Component/Nav"
import Hero from "./Component/Hero";
import About from "./Component/About";
import Career from "./Component/Career";
import Career2 from "./Component/Career2";
import Participate from "./Component/Participate";
import Ope from "./Component/Ope"
import Feature from "./Component/Feature";
import Academic from './Component/Academic';
import Footer from "./Component/Footer"
import { FiArrowUp } from "react-icons/fi";
import "./Home.css"
function Home() {
  return (
    <div>
     <Nav />
     <Hero />
     <About />
     <Career />
     <Career2 />
     <Academic />
     <Participate />
     <Ope />
     <Feature />
     <Footer />
     <a href="#arrowicon" className='homebtn'>
      <button className='arbtn'> <FiArrowUp /> </button>
     </a>
     </div>
  );
}

export default Home;
