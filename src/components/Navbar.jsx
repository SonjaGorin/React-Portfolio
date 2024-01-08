import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <ul>
            <li>
            <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </Link>
            </li>
            <li>
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
            
        </ul>
    )
}
