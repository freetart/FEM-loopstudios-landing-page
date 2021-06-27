import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Tag from './components/Tag/Tag';
import Preloader from './components/Preloader/Preloader';

// TODO: add aos | add hamburger menu

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
