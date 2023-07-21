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

function App() {
  return (
    <>
      <NAvbar />
      <section id='home' style={{display:"none"}}>
        <Main />
        <Prometheus />
        <Hyperion />
        <Odyssey />
      </section>
      <Prometheus_details />
      <About />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
