import Navbar from './components/Navbar';
import './styles/style-navbar.css';
import Banner from './components/Banner';
import Planejar from './components/Planejar';
import Carrossel from './components/Carrossel';
import Destinos from './components/Destinos';
import Opcoes from './components/Opcoes';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Planejar />
      <Carrossel />
      <Destinos />
      <Opcoes />
      <Footer />
    </>
  );
}

export default App;
