import logo from './logo.svg';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Exprience from './Components/Exprience/Exprience';
import Protfolio from './Components/Protfolio/Protfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
     <About></About>
     <Exprience></Exprience>
     <Protfolio></Protfolio>
     <Testimonial></Testimonial>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
