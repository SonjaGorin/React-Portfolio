import Navbar from "./Navbar"
import "src/components/Header/Header.css"

function Header() {
    return (
      <nav className="style-nav sticky-top navbar-expand-lg p-3">
        <div className="d-flex justify-content-between">
          <div>
            <h1 className="name nav-item">Sonja Gorin</h1>
            <h2 className="under-name nav-item">Software developer</h2>
          </div>
          <div>
            <Navbar />
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;