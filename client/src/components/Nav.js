import { Link } from 'react-router-dom'

const Nav = () => {
    return (
    <div className="row">
        <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/resources">Resources</Link></li>
                    <li className="nav-item"><Link to="/activism">Activism</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    </div>    
    )
}

export default Nav