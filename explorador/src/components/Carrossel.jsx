import maceio1 from '../assets/maceio1.jpeg';
import novaIorque from '../assets/nova-iorque.jpg';
import paris1 from '../assets/paris1.jpg';
import rio from '../assets/rio.jpg';
import japan from '../assets/Japan.jpg';
import jalapao from '../assets/jalapao.jpg';
import '../styles/style-carrossel.css';

function Carrossel() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center my-5">
      <div className="row w-100 altura-ajustada">
        <div className="col-sm-6 mb-3 mb-sm-0 centralizar-conteudo">
          <div className="card margem">
            <div className="card-body text-center">
              <h2 className="card-title">Destinos Inesquecíveis</h2>
              <p className="card-text">
                De praias paradisíacas a cidades cheias de história, oferecemos opções para todos os estilos.
                Quer seja uma aventura pela natureza, uma escapada romântica ou férias em família, temos o destino certo para você.
              </p>
              <div>
                <a href="#" className="btn btn-primary">Acessar Canais</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={maceio1} className="d-block w-100 carrossel-imagem" alt="Maceió" />
              </div>
              <div className="carousel-item">
                <img src={novaIorque} className="d-block w-100 carrossel-imagem" alt="Nova Iorque" />
              </div>
              <div className="carousel-item">
                <img src={paris1} className="d-block w-100 carrossel-imagem" alt="Paris" />
              </div>
              <div className="carousel-item">
                <img src={rio} className="d-block w-100 carrossel-imagem" alt="Rio de Janeiro" />
              </div>
              <div className="carousel-item">
                <img src={japan} className="d-block w-100 carrossel-imagem" alt="Japão" />
              </div>
              <div className="carousel-item">
                <img src={jalapao} className="d-block w-100 carrossel-imagem" alt="Jalapão" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrossel;
