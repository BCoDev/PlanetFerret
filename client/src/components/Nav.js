import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import styles from './Nav.module.scss'

const NavBar = () => {
    return (
        <Nav variant="tabs" className={styles.navbar}>
            <Nav.Item>
                <Link to="/" className={styles.navItem} >Planet Ferret</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/about" className={styles.navItem}>About</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/resources" className={styles.navItem}>Resources</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/activism" className={styles.navItem}>Activism</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/chat" className={styles.navItem}>Chat</Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar