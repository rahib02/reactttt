import "./App.css";
import "./companent/Navbar";
import Navbar from "./companent/Navbar";
import "./companent/Section1";
import Section1 from "./companent/Section1";
import "./companent/Section2";
import Section2 from "./companent/Section2";
import "./companent/Section3";
import Section3 from "./companent/Section3";
import "./companent/Section4";
import Section4 from "./companent/Section4";
import "./companent/Footer";
import Footer from "./companent/Footer";
/* import { Divv } from './style';
import { Divv2 } from './style';
import { Title } from './style';
import { Param } from './style'
import { Btn } from './style'
import { Img } from './style' */
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Footer></Footer>
    </div>
  );
}

export default App;
