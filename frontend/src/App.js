import logo from './logo.svg';
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
import Odyssey_details from './odysseydetails';
import Navres from './navres';

function App() {

  return (
    <>
      <Navres />
      <NAvbar />
      <section id='home' >
        <Main />
        <Prometheus />
        <Hyperion />
        <Odyssey />
      </section>
      <Prometheus_details />
      <Hyperion_details />
      <Odyssey_details />
      <About />
      <Contact />
      <Footer />

    </>
  );
}
export function showprometheusdetails() {
  document.getElementById("home").style.display = "none"
  document.querySelector('.prod').style.display = "block"
  window.location.href = "#"

}
export function showHyperiondetails() {
  document.getElementById("home").style.display = "none"
  document.querySelector('.hypd').style.display = "block"
  window.location.href = "#"

}
export function showOdysseydetails() {
  document.getElementById("home").style.display = "none"
  document.querySelector('.odyd').style.display = "block"
  window.location.href = "#"

}
export function shownav() {
  document.querySelector('.navlink').classList.remove('hideani')
  document.getElementById('barger').style.display = "none"
  document.getElementById('close').style.display = "block"
  document.getElementById('navrestxt').innerHTML="Close"
  document.querySelector('.navlink').classList.add('show')
  setTimeout(function () { document.querySelector('.navlink').classList.add('showani') }, 10)
}
export function hidenav() {
  document.querySelector('.navlink').classList.add('hideani')


  setTimeout(function () {
    document.querySelector('.navlink').classList.remove('show')
    document.querySelector('.navlink').classList.remove('showani')
    document.getElementById('barger').style.display = "block"
    document.getElementById('close').style.display = "none"
    document.getElementById('navrestxt').innerHTML="menu"
  },500)
}

export default App;
