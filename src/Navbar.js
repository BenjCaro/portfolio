import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
          <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body ps-4 pe-4" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-uppercase " to="/">John Doe</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase " aria-current="page" to="/">Home</Link>
                   </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase " to="/pages/services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase " to="/pages/realisations">Portfolio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase " to="/pages/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-uppercase" to="/pages/legals">Mentions legales</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
    );
  }