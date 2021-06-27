import Header from './components/Header/Header';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Tag from './components/Tag/Tag';

// TODO: add preloader | make responsive

function App() {
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
