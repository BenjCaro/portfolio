import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
          <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body ps-3" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand " to="/pages/home">JOHN DOE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link active " aria-current="page" to="/pages/home">HOME</Link>
                   </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/pages/services">SERVICES</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/pages/realisations">PORTFOLIO</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/pages/contact">CONTACT</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/pages/legals">MENTIONS LEGALES</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
    );
  }