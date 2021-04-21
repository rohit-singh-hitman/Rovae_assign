import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="App_Read">
        <h4>
          <i className="fas fa-info-circle"></i>READ ABOUT Our Covid-19
          precautions
        </h4>
      </div>

      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="../images/UC-Logo_Vector-01 2.jpg" alt="navbar" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    style={{ color: "#0047ab" }}
                    aria-current="page"
                    href="#"
                  >
                    about <span>|</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    services <span>|</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    resources <span>|</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    careers <span>|</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    home-care heroes <span>|</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    contact <span>|</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
