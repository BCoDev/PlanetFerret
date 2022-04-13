import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
		<footer className="footer">
			<a href="https://github.com/BCoDev" className="social-button"><FontAwesomeIcon icon={faFacebook} /></a>
			<a href="https://github.com/BCoDev" className="social-button"><FontAwesomeIcon icon={faInstagram} /></a>
			<a href="https://github.com/BCoDev" className="social-button"><FontAwesomeIcon icon={faTwitter} /></a>
			<small><i>Copyright &copy; 2018 <a href="https://github.com/BCoDev" className="email">Brenda Cohen</a></i></small>
		</footer>
	)
}

export default Footer