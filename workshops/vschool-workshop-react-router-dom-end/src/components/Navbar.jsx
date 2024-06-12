import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav-container">

            <Link to="/">
            <button className="text-link">Home</button>
            </Link>

            <Link to="/about">
            <button className="text-link">About</button>
            </Link>

            <Link to="/services">
            <button className="text-link">Services</button>
            </Link>

            <Link to="/contact">
            <button className="text-link">Contact</button>
            </Link>
        </nav>
    )
}

export default Navbar