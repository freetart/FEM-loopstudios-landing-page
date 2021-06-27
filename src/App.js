import { useState, useEffect } from 'react';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Tag from './components/Tag/Tag';
import Preloader from './components/Preloader/Preloader';

// TODO: add hamburger menu

function App() {
  const [isLoading, setIsLoading] = useState(true);

  AOS.init({ offset: 100, duration: 1000, once: true });

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <main>
        <About />
        <Gallery />
      </main>
      <Footer />
      <Tag />
    </>
  );
}

export default App;
