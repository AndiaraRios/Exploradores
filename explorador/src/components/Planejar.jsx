import '../styles/style-planejar.css';

function Planejar() {
  return (
    <div className="container my-5">
      <h2 className="text-center titulo-destaque">PLANEJE SUA VIAGEM</h2>

      <div className="caixa-busca container my-4 p-4 rounded-4">
        <h5 className="mb-4">
          <strong>Viagens em promoção</strong> pra você conhecer o Brasil e o mundo!
        </h5>

        <div className="btn-group mb-3" role="group">
          <button type="button" className="btn btn-tipo active">Ida e volta</button>
          <button type="button" className="btn btn-tipo">Só ida</button>
          <button type="button" className="btn btn-tipo">Vários destinos</button>
        </div>

        <div className="row g-2 align-items-center">
          <div className="col-md">
            <input type="text" className="form-control" placeholder="Origem" />
          </div>
          <div className="col-md-auto text-center fs-4">↔</div>
          <div className="col-md">
            <input type="text" className="form-control" placeholder="Destino" />
          </div>
          <div className="col-md">
            <input type="date" className="form-control" />
          </div>
          <div className="col-md">
            <input type="date" className="form-control" />
          </div>
          <div className="col-md">
            <select className="form-select">
              <option>1 Viajante - Todas as classes</option>
              <option>2 Viajantes - Econômica</option>
              <option>3 Viajantes - Executiva</option>
            </select>
          </div>
          <div className="col-md-auto">
            <button className="btn btn-buscar">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planejar;
