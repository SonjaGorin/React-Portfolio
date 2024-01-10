import Navbar from "./Navbar"

function Header() {
    return (
      <nav className="sticky-top bg-light navbar-expand-lg">
        <div className="d-flex justify-content-between">
          <div>
            <h1 className="nav-item">Sonja Gorin</h1>
            <h2 className="nav-item">Software developer</h2>
          </div>
          <div>
            <Navbar />
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;