// Navbar.js
import { Link } from 'react-router-dom';
import "/src/Nav.css"; // Updated path for Nav.css
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
                <li>
                    <Link to="/auth">Join the gang!</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;