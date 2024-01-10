import { Link, useLocation } from 'react-router-dom';
import "./Header.css"

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav navbar navbar-nav ms-auto pt-4">
            <li className="nav-item">
            <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active item' : 'nav-link item'}
            >
                About Me
            </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Portfolio"
                    className={currentPage === '/Portfolio' ? 'nav-link active item' : 'nav-link item'}
                >
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active item' : 'nav-link item'}
                >
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Resume"
                    className={currentPage === '/Resume' ? 'nav-link active item' : 'nav-link item'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    )
}

export default Navbar;