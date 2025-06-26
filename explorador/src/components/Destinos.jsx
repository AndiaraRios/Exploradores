import rioCard from '../assets/riodejaneiro.jpg';
import maceioCard from '../assets/maceio.jpg';
import salinas from '../assets/salinas.webp';
import '../styles/style-destinos.css';


function Destinos() {
  return (
    <div className="container-fluid my-5">
      <h2 className="text-center titulo-destaque">Sua Aventura Começa Aqui: Descubra Nossos Passeios</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div className="col">
          <div className="card h-100 card-imagem text-center">
            <img src={rioCard} className="card-img-top" alt="Rio de Janeiro" />
            <div className="card-body">
              <h5 className="card-title">RIO DE JANEIRO</h5>
              <p className="card-text">Ida: 25/04/2025 - Volta: 02/05/2025</p>
              <p className="card-text">Ida e volta 5x de R$ 105</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 card-imagem text-center">
            <img src={maceioCard} className="card-img-top" alt="Maceió" />
            <div className="card-body">
              <h5 className="card-title">MACEIÓ</h5>
              <p className="card-text">Ida: 28/03/2025 - Volta: 04/04/2025</p>
              <p className="card-text">Ida e volta 4x de R$ 150</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 card-imagem text-center">
            <img src={salinas} className="card-img-top" alt="Salinas" />
            <div className="card-body">
              <h5 className="card-title">SALINAS</h5>
              <p className="card-text">Ida: 23/05/2025 - Volta: 30/05/2025</p>
              <p className="card-text">Ida e volta 6x de R$ 105</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinos;