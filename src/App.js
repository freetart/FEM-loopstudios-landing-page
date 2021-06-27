import Header from './components/Header/Header';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
