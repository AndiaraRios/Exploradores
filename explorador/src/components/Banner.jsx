function Banner() {
  return (
    <div className="card banner text-bg-dark">
      <img src="/img/banner.jpg" className="card-img" alt="Banner principal" />
      <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
        <h1 className="card-title bg-black bg-opacity-50 p-2 rounded">
          Descubra o Mundo com a Gente
        </h1>
        <p className="card-text bg-dark bg-opacity-50 p-2 rounded">
          Viajar é mais do que ir de um lugar a outro – é sobre viver
          experiências que transformam. Aqui, criamos roteiros e dicas para quem
          deseja explorar o mundo.
        </p>
        <p className="card-text bg-dark bg-opacity-50 p-1 rounded">
          <small>Pronto para começar sua próxima aventura? Explore nossos destinos!</small>
        </p>
      </div>
    </div>
  );
}

export default Banner;