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

function App() {
  return (
    <>
      <NAvbar />
      <section id='home'>
        <Main />
        <Prometheus />
        <Hyperion />
        <Odyssey />
      </section>
      <About />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
