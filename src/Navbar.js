import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
          <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body ps-4 pe-4" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-uppercase " to="/">John Doe</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link text-uppercase" to="/" >Home</NavLink>
                   </li>
                  <li className="nav-item" >
                    <NavLink className="nav-link text-uppercase " to="/pages/services">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-uppercase " to="/pages/realisations">Portfolio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-uppercase " to="/pages/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-uppercase" to="/pages/legals">Mentions legales</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
    );
  }