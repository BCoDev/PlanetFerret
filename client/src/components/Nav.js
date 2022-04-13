import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <Nav variant="tabs" className="navbar">
            <Nav.Item>
                <Link to="/" className="nav-item">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/about" className="nav-item">About</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/resources" className="nav-item">Resources</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/activism" className="nav-item">Activism</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/contact" className="nav-item">Contact Us</Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar