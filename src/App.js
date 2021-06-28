import { useState, useEffect } from 'react';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Tag from './components/Tag/Tag';
import Preloader from './components/Preloader/Preloader';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  AOS.init({ offset: 100, duration: 1000, once: true });

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Sidebar isActive={isActive} />
      <Header setIsActive={setIsActive} isActive={isActive} />
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
