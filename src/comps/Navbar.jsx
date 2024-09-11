// Navbar.js
import { Link } from 'react-router-dom';
import '../Nav.css';
function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Journey</Link>
                </li>
                <li>
                    <Link to="/works">Works</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;