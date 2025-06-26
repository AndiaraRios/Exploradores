import bannerImage from '../assets/banner.jpg';

function Banner() {
  return (
    <div className="card banner text-white">
      <img src={bannerImage} className="card-img" alt="Banner principal" />
      <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
        <h1 className="card-title banner-texto banner-texto-1" style={{ color: '#ff6600', fontSize: '2.8rem' }}>
  Descubra o Mundo com a Gente
</h1>

<p className="card-text banner-texto banner-texto-2" style={{ fontSize: '1.2rem', color: '#ffffff' }}>
  Viajar é mais do que ir de um lugar a outro – é sobre viver
  experiências que transformam. Aqui, criamos roteiros e dicas para quem
  deseja explorar o mundo.
</p>

<p className="card-text banner-texto banner-texto-3" style={{ fontSize: '1rem', color: '#eeeeee' }}>
  <small>Pronto para começar sua próxima aventura? Explore nossos destinos!</small>
</p>

      </div>
    </div>
  );
}

export default Banner;
