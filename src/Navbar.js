export const Navbar = () => {
    return (
          <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="">JOHN DOE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active " aria-current="page" href="">HOME</a>
                   </li>
                  <li className="nav-item">
                    <a className="nav-link " href="">SERVICES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="">PORTFOLIO</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="">CONTACT</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">MENTIONS LEGALES</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
    );
  }