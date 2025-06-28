import '../styles/style-opcoes.css';
import slogan from '../assets/slogan.png';
import globo from '../assets/globo.png';
import mapa from '../assets/mapa.png';
import aviao from '../assets/aviao.png';

function Opcoes() {
  return (
    <>
      <div className="container text-center my-5">
        <h1 className="titulo-destaque mb-3">O Mundo Está Esperando: Embarque em Uma Jornada Única!</h1>
        <p>
          Sonha em explorar o mundo sem comprometer o orçamento? <br />
          Descubra dicas, promoções e roteiros acessíveis para conhecer lugares incríveis
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center card-opcao h-100">
              <div className="card-body">
                <img src={globo} alt="globo terrestre" className="globo-card-opcao" />
                <h5 className="titulo-card">Exploradores Urbanos +</h5>
                <p className="card-text">Descubra o Mundo com Outros Olhos.</p>
                <a href="#" className="btn btn-destaque">Clique Aqui!</a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center card-opcao h-100">
              <div className="card-body">
                <img src={mapa} alt="Mapa" className="mapa-card-opcao" />
                <h5 className="titulo-card">Roteiros Incríveis</h5>
                <p className="card-text">Em busca de novas descobertas?</p>
                <a href="#" className="btn btn-destaque">Clique Aqui!</a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center card-opcao h-100">
              <div className="card-body">
                <img src={aviao} alt="Aviao" className="aviao-card-opcao" />
                <h5 className="titulo-card">Planeje Sua Viagem</h5>
                <p className="card-text">Explore, Descubra, Viva.</p>
                <a href="#" className="btn btn-destaque">Clique Aqui!</a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mb-4">
            <div className="card text-center card-opcao h-100">
              <div className="card-body">
                <img src={slogan} alt="Logo e frase" className="logo-card-opcao" />
                <h5 className="titulo-card">Seja Nosso Franqueado</h5>
                <p className="card-text">Transforme sua paixão por viagens em um negócio de sucesso.</p>
                <a href="#" className="btn btn-destaque">Clique Aqui!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Opcoes;