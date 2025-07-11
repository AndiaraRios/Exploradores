import logo from '../assets/logo.png';
import texto from '../assets/texto.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top corNav">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#"> 
          <img src={logo} alt="Logo Exploradores Urbanos" className="logo-navbar" /> 
          <img src={texto} alt="Texto: Exploradores Urbanos" style={{ height: '65px', marginLeft: '-4px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Entre ou Cadastre-se
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;