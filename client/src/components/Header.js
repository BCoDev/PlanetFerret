import { Link } from 'react-router-dom'
// import FerretPlanet from '../assets/images/ferretball.png'
// 			<img src={FerretPlanet} className="ferret-logo" alt='' />

const Header = () => {
    return (
		<header>
			<h1><Link to="/" className="logo">Planet Ferret</Link></h1>
			<Link to="/">Ferrets are our Business</Link>
		</header>
	)
}
export default Header