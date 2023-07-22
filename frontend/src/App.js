import logo from './logo.svg';
import './App.css';
import NAvbar from './nav';
import Main from './main';
import Prometheus from './promitheus';
import Hyperion from './Hyperion';
import Odyssey from './Odyssey';
import Footer from './footer';
import Contact from './contact';
import About from './about';
import Prometheus_details from './prometheusdetail';
import Hyperion_details from './hyperiondetails';

function App() {
  
  return (
    <>
      <NAvbar />
      <section id='home' >
        <Main />
        <Prometheus />
        <Hyperion />
        <Odyssey />
      </section>
      <Prometheus_details />
      <Hyperion_details />
      <About />
      <Contact />
      <Footer />

    </>
  );
}
export function showprometheusdetails(){
  document.getElementById("home").style.display="none"
  document.querySelector('.prod').style.display="block"
  window.location.href="#"
    
}
export function showHyperiondetails(){
  document.getElementById("home").style.display="none"
  document.querySelector('.hypd').style.display="block"
  window.location.href="#"
    
}

export default App;
